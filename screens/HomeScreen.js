import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Alert, Keyboard, Statusbar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


import { getweather } from '../store/actions/weatherActions';
import Form from '../components/form';
import Weather from '../components/weather';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});


const HomeScreen = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.weather);



    const searchSubmitHandler = () => {
        if (search === '') {
            return Alert.alert('Validation', 'City name is required!', [{ text: 'OK' }]);
        }
        setLoading(true);
        dispatch(getweather(search, () => setLoading(false), () => setLoading(false)));
        setSearch('');
        Keyboard.dismiss();

    };


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.Btn}
                    onPress={async () => {
                        try {
                            await auth().signOut().then(() => {
                                navigation.replace('Login');
                            })
                        } catch (e) {
                            alert(e);
                        }
                    }}
                >
                    <Text style={styles.BtnText}>
                        Logout
                    </Text>
                </TouchableOpacity>
                {/* <Statusbar backgroundColor='#4f6d7a' barStyle='light-content'/> */}
                <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
                {/* <Form  /> */}
                <Weather loading={loading} data={data} error={error} />

            </View>
        </TouchableWithoutFeedback>
    );
};



export default HomeScreen;
