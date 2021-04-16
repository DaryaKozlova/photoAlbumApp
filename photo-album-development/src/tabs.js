import PhotosContainer from "./containers/PhotosContainer";

const tabs = [
    {
        title: 'All photos',
        component: <PhotosContainer/>
    },
    {
        title: 'Albums',
        component: <></>
    },
    {  
        title: 'Recently deleted',
        component: <></>
    }
];

export default tabs;
