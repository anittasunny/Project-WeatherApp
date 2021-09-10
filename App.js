import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AppStack from './navigation/AppStack';

function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

export default App;






























































// import React, { useState } from 'react';
// import { Text, View, StyleSheet, Alert, Keyboard, Statusbar } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux';

// import { getweather } from './store/actions/weatherActions';
// import Form from './components/form';
// import Weather from './components/weather';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
// });

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const { data, error } = useSelector(state => state.weather);

//   // useEffect(() => {
//   // dispatch(getWeather('paris'));
//   //  }, [dispatch]);

//   const searchSubmitHandler = () => {
//     if (search === '') {
//       return Alert.alert('Validation', 'City name is required!', [{ text: 'OK' }]);
//     }
//     setLoading(true);
//     dispatch(getweather(search, () => setLoading(false), () => setLoading(false)));
//     setSearch('');
//     Keyboard.dismiss();

//   };


//   return (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <View style={styles.container}>
//          {/* <Statusbar backgroundColor='#4f6d7a' barStyle='light-content'/> */}
//         <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
//         {/* <Form  /> */}
//         <Weather loading={loading} data={data} error={error} />
//         <Text>Hello</Text>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };



// export default App;
