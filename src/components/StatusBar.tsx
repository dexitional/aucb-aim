import { useEffect } from 'react'
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor }  from '@capacitor/core';
export default function HeadBar() {

    useEffect(() => {
        const configureStatusBar = async () => {
          if (Capacitor.isNativePlatform()) {
            // Prevent the status bar from overlaying the WebView
            await StatusBar.setOverlaysWebView({ overlay: false });
            StatusBar.setOverlaysWebView({ overlay: true });
    
            // Set the status bar background color
            await StatusBar.setBackgroundColor({ color: "#ffffff" }); // Replace with your desired color
    
            // Set the status bar text and icon color
            await StatusBar.setStyle({ style: Style.Dark }); // Use Style.Light for dark backgrounds
          }
        };
    
        configureStatusBar();
      }, []);
  return (
    <div>StatusBar</div>
  )
}
