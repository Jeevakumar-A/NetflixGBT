# NetflixGPT
- "unmounting"----->means a component is being removed from the DOM
- useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    // handle user login/logout
  });

  return () => unsubscribe(); // cleanup when component unmounts
}, []);

- listeners in useEffect the return()=>unsubscribe()--->its the good practice of prevents memory leaks/duplicate listeners

- Hardcoded files into the constants.js file is the best practise  of  our needed images/icon/files to import where we want to use for it

- useDispatch()--> dispatch is a function provided by Redux (and React Redux) that sends an action to the Redux store. This action tells the store to update the state based on the logic defined in your reducers

- ?autoplay=1&mute=1 ---->used to autoplay the embed youtube video
