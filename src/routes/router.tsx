import { createBrowserRouter, redirect } from 'react-router-dom'
import { ListOfTasks } from '../components/ListOfTasks'
import { Login } from '../components/Login'
import { TaskForm } from '../components/TaskForm'
import { HomePage } from '../pages/HomePage'

export const router = createBrowserRouter([
    {
        path: '/',
        loader: ({ request }) => {
            if (new URL(request.url).pathname === '/') {
                return redirect('/tasks')
            }
            return null
        },
        element: <HomePage />,
        children: [

            {
                index: true,
                path: 'tasks',
                element: <ListOfTasks />
            },
            {
                path: 'task-form',
                element: <TaskForm />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])