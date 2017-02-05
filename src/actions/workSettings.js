/* @flow */

import * as types from './types';
import { AsyncStorage } from 'react-native';
import type { WorkSettingsModel } from '../models';

export function getWorkSettings(username: string, password: string): any {
  return (dispatch) => {
    AsyncStorage.getItem('workSettings').then(workSettings => {
      const defaultWorkSettings = {
        dayStart: {
          hour: 9,
          minute: 0
        },
        dayEnd: {
          hour: 19,
          minute: 0
        },
        daysOfWeek: [0,1,2,3,4]
      };
      dispatch({
        type: types.WORK_SETTINGS_FETCH_COMPLETE,
        payload: workSettings ? JSON.parse(workSettings) : defaultWorkSettings
      });
    });
  };
}

export function updateWorkSettings(newWorkSettings: WorkSettingsModel): {type: string, payload: WorkSettingsModel} {
  AsyncStorage.setItem('workSettings', JSON.stringify(newWorkSettings));
  return {
    type: types.WORK_SETTINGS_UPDATE_COMPLETE,
    payload: newWorkSettings,
  };
}
