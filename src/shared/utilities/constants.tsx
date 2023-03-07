import {appImages} from '../exporter';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const default_img =
  'https://i1.sndcdn.com/avatars-000439901343-0dng23-t500x500.jpg';

let image_options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const LANGUAGE_List = [
  {
    id: 0,
    title: 'English',
    value: 'English',
  },
  {
    id: 1,
    title: 'Spanish',
    value: 'Spanish',
  },
];

export {default_img, image_options, LANGUAGE_List};
