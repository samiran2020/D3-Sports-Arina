import { View, Text,TouchableOpacity,Button,ScrollView } from 'react-native'
import React,{useState} from 'react'
import styles from '../../assets/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";



const ListButton = (props: any) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
    <TouchableOpacity style={styles.listbuttonwrapper} onPress={toggleModal}>
        <View style={styles.listbuttondetails}>
            {props.count &&
              <View style={styles.count}>
                <Text style={styles.counttext}>{props.count}</Text>
              </View>
            }
            <View style={styles.listbuttoninfo}>
                <Text style={styles.listtitle}>{props.title}</Text>
                {props.subtitle &&<Text style={styles.listsubtitle}>{props.subtitle}</Text>}
            </View>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={20} style={{color:'#000'}} />
    </TouchableOpacity>
    <View>
        <Modal isVisible={isModalVisible} style={styles.modal} >
            <View style={styles.modalcontanier}>
              <TouchableOpacity onPress={toggleModal} style={styles.closebutton}>
                <MaterialCommunityIcons name="close-circle-outline" size={20} style={{color:'#53A53F'}} />
              </TouchableOpacity >

              <Text>Hello!</Text>
              <ScrollView style={{maxHeight:400}}>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
              </ScrollView >
            </View>
        </Modal>
    </View>
    </>
  )
}

export default ListButton