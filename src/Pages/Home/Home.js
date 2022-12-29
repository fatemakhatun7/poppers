import React from 'react';
import useTitle from '../../Hooks/useTitle';
import PostForm from './PostForm';
import Welcome from './Welcome';

const Home = () => {
    useTitle("Home")

    return (
        <div>
            <Welcome></Welcome>
            <PostForm></PostForm>
        </div>
    );
};

export default Home;