
import mobileAds,{MaxAdContentRating} from "react-native-google-mobile-ads";
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

  
export const configureAdMob = async () => {
    const { status } = await requestTrackingPermissionsAsync();

    if (status === 'granted') {
      console.log('User permission is tracking now.');
    }
    
    mobileAds()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.PG,

      // An array of test device IDs to allow.
      testDeviceIdentifiers: ['EMULATOR'],
    })
    .then(() => {
      // RequestConfiguration completed successfully
    });
}

export const myInitAdMob = async () => {
    await configureAdMob();
    const adapterStatuses = await mobileAds().initialize();
    console.log(adapterStatuses);
    return adapterStatuses;
}
