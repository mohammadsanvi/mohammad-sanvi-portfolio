import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ProjectDetail from '../Pages/ProjectDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    
    {
        path: '/projects/:id',
        element: <ProjectDetail />
     }
    
]);

export default router;
