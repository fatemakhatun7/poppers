import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Media from '../Media/Media';
import PostForm from './PostForm';
import Welcome from './Welcome';

const Home = () => {
    useTitle("Home")

    return (
        <div>
            <Welcome></Welcome>
            <PostForm></PostForm>
            <Media></Media>
        </div>
    );
};

export default Home;