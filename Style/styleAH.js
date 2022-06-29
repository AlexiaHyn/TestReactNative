import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screenCenter:{
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
    },

    verticalCenter:{
        flex: 1, 
        justifyContent: "center",
    },

    flexEnd:{
        flex:1,
        justifyContent: "flex-end",
    },

    flexRowBtw:{
        display: 'flex', flexDirection: 'row', marginBottom: 0, justifyContent: 'space-between'
    },

    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    txtBlack:{
        color:"black",
    },

    txtWhite:{
        color:"white",
    },

    txtGrey:{
        color:"#808080",
    },

    txtLight:{
        color: "#bebebe"
    },

    fontBold:{
        fontWeight: "bold",
    },

    bgLight: {
        backgroundColor: "#DCDCDC",
    },
    bgWhite:{
        backgroundColor: "white",
    },

    bgDark:{
        backgroundColor: "rgba(39, 39, 39, 1)",
    },

    rounded: {
        borderRadius: 5,
    },

    p1:{
        padding: 5,
    },

    p2:{
        padding: 10,
    },

    p3:{
        padding: 20,
    },

    px1:{
        paddingLeft: 5,
        paddingRight: 5
    },

    px2:{
        paddingLeft: 10,
        paddingRight: 10
    },

    px3:{
        paddingLeft: 20,
        paddingRight: 20
    },

    mb0:{
        marginBottom:0,
    },

    mb1:{
        marginBottom:5,
    },

    mb2:{
        marginBottom:10,
    },

    mb3:{
        marginBottom:20,
    },

    my0:{
        marginTop:0,
        marginBottom:0,
    },

    my1:{
        marginTop:5,
        marginBottom:5,
    },

    my2:{
        marginTop:10,
        marginBottom:10,
    },

    my3:{
        marginTop:20,
        marginBottom:20,
    },

    removeCardBorder:{
        borderWidth: 0, elevation: 0, 
        shadowColor: 'rgba(0,0,0, 0.0)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
    },

})
