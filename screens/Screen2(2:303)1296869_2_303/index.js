import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_305}>
        <View style={styles.View_2_306}>
          <View style={styles.View_2_307}>
            <Text style={styles.Text_2_307}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_2_308}>
          <View style={styles.View_2_309} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00ee11eb-a01a-4918-ab3f-9c4a74e835a6"
            }}
            style={styles.ImageBackground_2_310}
          />
          <View style={styles.View_2_311} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97e09455-9895-4739-a08c-c8f001497578"
          }}
          style={styles.ImageBackground_2_312}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79348ed4-3c6c-46fb-8a37-72fd310ab93b"
          }}
          style={styles.ImageBackground_2_316}
        />
      </View>
      <View style={styles.View_2_321} />
      <View style={styles.View_2_322}>
        <Text style={styles.Text_2_322}>Set Custom Reminders</Text>
      </View>
      <View style={styles.View_2_323}>
        <Text style={styles.Text_2_323}>
          From visa renewals to passport expirations, we&#39;ve got you covered
        </Text>
      </View>
      <View style={styles.View_2_324}>
        <View style={styles.View_2_325}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e88b2ada-517b-4ee1-94b2-4aef4d210f81"
            }}
            style={styles.ImageBackground_2_326}
          />
          <View style={styles.View_2_327} />
          <View style={styles.View_2_328} />
        </View>
      </View>
      <View style={styles.View_2_329}>
        <Text style={styles.Text_2_329}>Get Started</Text>
      </View>
      <View style={styles.View_24_2576}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4eee481d-3645-447c-ba8b-0d28a0397ee5"
          }}
          style={styles.ImageBackground_24_2577}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4caff410-ffc4-49b2-a29f-0e62e5299394"
          }}
          style={styles.ImageBackground_24_2609}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6d9d6f7-da7d-400f-9200-fa939f58dd81"
          }}
          style={styles.ImageBackground_24_2611}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33708691-a00c-44bd-b4be-cf97931d0d5e"
          }}
          style={styles.ImageBackground_24_2634}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbdf5d49-99ff-4c71-bef2-c5f872a3bf55"
          }}
          style={styles.ImageBackground_24_2670}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/118ef122-1393-419f-82ba-3986340e3052"
          }}
          style={styles.ImageBackground_24_2683}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73dde78c-6ade-4952-95ee-c2c97868a219"
          }}
          style={styles.ImageBackground_24_2620}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_2_305: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_306: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_307: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_308: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("1%")
  },
  View_2_309: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_2_310: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_2_311: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_2_312: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_316: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_2_321: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("112%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_322: {
    width: wp("88%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_323: {
    width: wp("88%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_2_324: {
    width: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("105%")
  },
  View_2_325: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_326: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_327: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 50, 56, 1)"
  },
  View_2_328: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 50, 56, 1)"
  },
  View_2_329: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("102%"),
    justifyContent: "flex-start"
  },
  Text_2_329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5357142686843872,
    textTransform: "none"
  },
  View_24_2576: {
    width: wp("105%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_2577: {
    width: wp("105%"),
    height: hp("39%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_24_2609: {
    width: wp("82%"),
    height: hp("3%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_24_2611: {
    width: wp("33%"),
    height: hp("29%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_24_2634: {
    width: wp("24%"),
    height: hp("37%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_24_2670: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_24_2683: {
    width: wp("20%"),
    height: hp("13%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_24_2620: {
    width: wp("34%"),
    height: hp("16%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
