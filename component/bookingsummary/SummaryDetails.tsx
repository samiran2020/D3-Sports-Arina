import { View, Text} from 'react-native'
import React from 'react'
import styles from '../../assets/style'

const SummeryDetails = (props: any) => {

  return (
    <>
    <View style={styles.summarydetailswrapper}>
        <Text style={styles.listtitle}>Booking Summary</Text>
        <View style={styles.summarycontent}>
            <Text style={styles.summarylisttitle}>Date</Text>
            <Text style={styles.listtitle}>07-12-2023</Text>
        </View>
        <View style={styles.summarycontent}>
            <Text style={styles.summarylisttitle}>Sport</Text>
            <Text style={styles.listtitle}>Cricket</Text>
        </View>
        <View style={styles.summarycontent}>
            <Text style={styles.summarylisttitle}>Turf Size</Text>
            <Text style={styles.listtitle}>70ft x 110ft</Text>
        </View>
        <View style={styles.summarycontent}>
            <Text style={styles.summarylisttitle}>Time</Text>
            <Text style={styles.listtitle}>11:00AM - 13:00PM</Text>
        </View>
        <View style={styles.subtotalwrapper}>
            <Text style={styles.summarylisttitle}>Sub total</Text>
            <Text style={styles.listtitle}>₹800.00</Text>
        </View>
        <View style={styles.totalwrapper}>
        <Text style={styles.listtitle}>Total</Text>
            <Text style={styles.listtitle}>₹800.00</Text>
        </View>
    </View>
    </>
  )
}

export default SummeryDetails