import React from 'react'
import {
  HomePublic,
} from 'Pages'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const HomePageGateway = () => {
  const HomeComponent = <HomePublic />
  return HomeComponent;
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const HomeIndex = HomePageGateway;
export default HomeIndex;
