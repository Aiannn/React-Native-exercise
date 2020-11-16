import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Formik } from 'formik'

function AppForm(props) {
    return (
        <Formik
            initialValues={props.initialValues}
            onSubmit={props.onSubmit}
            validationSchema={props.validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default AppForm;