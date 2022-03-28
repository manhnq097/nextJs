interface RouteTypes {
    path: string;
    title: string;
}

const routes: RouteTypes[] = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/post',
        title: 'Post'
    },
    {
        path: '/photo',
        title: 'Photo'
    },
]

export default routes;