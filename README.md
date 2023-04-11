# FEMSA Digital House Challenge

This is a redeem points app done in React Native and Typescript with Expo.

## How to run

1. Before starting, download Expo Go app from Play Store (Android) or App Store (iOS).
2. After cloning this repository, we'll need to install the project's dependencies, just run `yarn` on root directory.
3. Once finished, run `yarn expo` to start the local bundler of the application.
4. Since this is an Expo app once the bundler is ready you'll see a QR code printed on the terminal. Scan the QR code above with the Expo Go app (Android) or the Camera app (iOS) in your smartphone to see the app in action.

All done! You will now have the application up and running on your mobile device.

## Screenshots

![image](https://user-images.githubusercontent.com/36776624/230995258-a07dfebb-fc02-4a51-bd8a-155649a022d1.png)
![image](https://user-images.githubusercontent.com/36776624/230995311-356a1e70-184f-484e-a8dd-c3168c060e69.png)![image](https://user-images.githubusercontent.com/36776624/230995331-a3b547bb-7ffc-463d-800f-2a4c2faa4b10.png)![image](https://user-images.githubusercontent.com/36776624/230995365-ee620631-10c7-46d0-a138-f20f203bf2e5.png)

https://user-images.githubusercontent.com/36776624/230995778-7b8a73e1-5681-4bca-8fbe-783d09f65c11.mov


## General considerations

- I decided to go with Expo instead of rn-cli for the app to be easier to test, but I'd probably have preferred to use rn-cli for a project that would go into production stages.

- In the `<PointsSummary />` component you can see there is a hardcoded 'Diciembre' text stating a specific month. This is because the Figma file nor the challenge instructions stated what data to show exactly. So I decided to filter API's data to show only the one from December. I asume this could be rethinked product-wise to include the ongoing month and its corresponding data instead.

- The images rendered in both the List and Details page come from a dynamic link based on the category of the image the url has (e.g: 'https://loremflickr.com/640/480/transport'). That is why you'd see that when pressing on an item the picture shown on the details page is not the same that on the list page. This could also be an improvement for this challenge where I could have somehow cached the image to show the same one.

- On the details page you can see that the image is fitting only the center of the white container. This is because I wanted to mimick exactly what was showned on the Figma file with the placeholder Image. I would have fitted the image into the whole container instead but wanted to take a pixel-perfect approach.

## Other possible improvements

- Add more tests, maybe an e2e one with Detox.
- Improve data handling by adding the current month filter to show correct data.
- Replace API's image URLs for non-dynamic ones so they can persist throughout the application.
- Add Styled Components to proper handle reusable styles and theming.
- Add i18n to handle texts and possible translations.

Made by [Ayelen Guini](https://www.linkedin.com/in/ayelenmarie/) with 💜 and 😸s!
