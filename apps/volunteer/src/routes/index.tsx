import { createBrowserRouter, RouterProviderProps } from 'react-router-dom';

import Layout from '@/components/layout';
import PATH from '@/constants/path';
import AnimalsPage from '@/pages/animals';
import AnimalsDetailPage from '@/pages/animals/detail';
import ChattingsPage from '@/pages/chattings';
import ChattingsRoomPage from '@/pages/chattings/room';
import MyPage from '@/pages/my';
import NotFoundPage from '@/pages/notfound';
import NotificationsPage from '@/pages/notifications';
import SettingsAccountPage from '@/pages/settings/account';
import SettingsPasswordPage from '@/pages/settings/password';
import SheltersProfilePage from '@/pages/shelters/profile';
import SheltersReviewsUpdatePage from '@/pages/shelters/reviews/update';
import SheltersReviewsWritePage from '@/pages/shelters/reviews/write';
import SigninPage from '@/pages/signin';
import SignupPage from '@/pages/signup';
import VolunteersPage from '@/pages/volunteers';
import VolunteersDetailPage from '@/pages/volunteers/detail';
import VolunteersSearchPage from '@/pages/volunteers/search';

export const router: RouterProviderProps['router'] = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: PATH.VOLUNTEERS.INDEX,
        children: [
          {
            id: 'VOLUNTEER_APP:VOLUNTEERS',
            index: true,
            element: <VolunteersPage />,
          },
          {
            id: 'VOLUNTEER_APP:VOLUNTEERS_DETAIL',
            path: PATH.VOLUNTEERS.DETAIL,
            element: <VolunteersDetailPage />,
          },
          {
            id: 'VOLUNTEER_APP:VOLUNTEERS_SEARCH',
            path: PATH.VOLUNTEERS.SEARCH,
            element: <VolunteersSearchPage />,
          },
        ],
      },
      {
        path: PATH.ANIMALS.INDEX,
        children: [
          {
            id: 'VOLUNTEER_APP:ANIMALS',
            index: true,
            element: <AnimalsPage />,
          },
          {
            id: 'VOLUNTEER_APP:ANIMALS_DETAIL',
            path: PATH.ANIMALS.DETAIL,
            element: <AnimalsDetailPage />,
          },
        ],
      },
      {
        path: PATH.CHATTINGS.INDEX,
        children: [
          {
            id: 'VOLUNTEER_APP:CHATTINGS',
            index: true,
            element: <ChattingsPage />,
          },
          {
            id: 'VOLUNTEER_APP:CHATTINGS_ROOM',
            path: PATH.CHATTINGS.ROOM,
            element: <ChattingsRoomPage />,
          },
        ],
      },
      {
        id: 'VOLUNTEER_APP:MYPAGE',
        path: PATH.MYPAGE.INDEX,
        element: <MyPage />,
      },
      {
        path: PATH.SETTINGS.INDEX,
        children: [
          {
            id: 'VOLUNTEER_APP:SETTINGS_ACCOUNT',
            path: PATH.SETTINGS.ACCOUNT,
            element: <SettingsAccountPage />,
          },
          {
            id: 'VOLUNTEER_APP:SETTINGS_PASSWORD',
            path: PATH.SETTINGS.PASSWORD,
            element: <SettingsPasswordPage />,
          },
        ],
      },
      {
        path: PATH.SHELTERS.INDEX,
        children: [
          {
            id: 'VOLUNTEER_APP:SHELTERS_PROFILE',
            path: PATH.SHELTERS.PROFILE,
            element: <SheltersProfilePage />,
          },
          {
            id: 'VOLUNTEER_APP:SHELTERS_REVIEWS_WRITE',
            path: PATH.SHELTERS.REVIEWS_WRITE,
            element: <SheltersReviewsWritePage />,
          },
          {
            id: 'VOLUNTEER_APP:SHELTERS_REVIEWS_UPDATE',
            path: PATH.SHELTERS.REVIEWS_UPDATE,
            element: <SheltersReviewsUpdatePage />,
          },
        ],
      },
      {
        id: 'VOLUNTEER_APP:NOTIFICATIONS',
        path: PATH.NOTIFICATIONS,
        element: <NotificationsPage />,
      },
      {
        id: 'VOLUNTEER_APP:SIGNUP',
        path: PATH.SIGNUP,
        element: <SignupPage />,
      },
      {
        id: 'VOLUNTEER_APP:SIGNIN',
        path: PATH.SIGNIN,
        element: <SigninPage />,
      },
    ],
  },
]);
