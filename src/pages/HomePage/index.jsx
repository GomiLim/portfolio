import { MainNoti } from 'containers/NotiBar/MainNoti';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { PixiPlugin } from 'gsap/PixiPlugin.js';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js';

const HomePage = () => {
  return (
    <MainLayout>
      <MainNoti />
    </MainLayout>
  );
};

export default HomePage;
