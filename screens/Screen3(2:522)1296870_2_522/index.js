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
      <View style={styles.View_2_524}>
        <View style={styles.View_2_525}>
          <View style={styles.View_2_526}>
            <Text style={styles.Text_2_526}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_2_527}>
          <View style={styles.View_2_528} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cdaf010-8de5-4f06-87fd-d3830b5840e0"
            }}
            style={styles.ImageBackground_2_529}
          />
          <View style={styles.View_2_530} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db7a5b89-4af1-4e9d-9f16-8d74aef45112"
          }}
          style={styles.ImageBackground_2_531}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1242a9d-7860-4c75-8e56-0bf9cf38b35e"
          }}
          style={styles.ImageBackground_2_535}
        />
      </View>
      <View style={styles.View_2_540} />
      <View style={styles.View_2_541}>
        <Text style={styles.Text_2_541}>Access Valuable Resources.</Text>
      </View>
      <View style={styles.View_2_542}>
        <Text style={styles.Text_2_542}>
          Step-by-step guides and FAQs to simplify your immigration journey
        </Text>
      </View>
      <View style={styles.View_2_543}>
        <View style={styles.View_2_544}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7cc054c-cdd8-46ba-9f53-3c0cdd19db33"
            }}
            style={styles.ImageBackground_2_545}
          />
          <View style={styles.View_2_546} />
          <View style={styles.View_2_547} />
        </View>
      </View>
      <View style={styles.View_2_548}>
        <Text style={styles.Text_2_548}>Get Started</Text>
      </View>
      <View style={styles.View_2_1815}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1869d32f-a4af-4d1b-955b-15d4c7ddc6b5"
          }}
          style={styles.ImageBackground_2_1816}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09f9cbe6-3f95-4b33-b658-84e711cfa687"
          }}
          style={styles.ImageBackground_2_1919}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83b4c0c4-2f8c-4cf7-81e9-d551e60d32e4"
          }}
          style={styles.ImageBackground_2_1954}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c132605-d4da-44c9-90f1-f06efe989c1b"
          }}
          style={styles.ImageBackground_2_2044}
        />
        <View style={styles.View_2_2046}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aea7e1cb-e6a7-4253-996e-20d415bb8283"
            }}
            style={styles.ImageBackground_2_2047}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/691febc4-8390-42cf-899c-428fc9bf8c02"
            }}
            style={styles.ImageBackground_2_2048}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dce235b9-a787-4f0b-8639-01c298ac5b6b"
            }}
            style={styles.ImageBackground_2_2049}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75a74e0a-ac22-408a-9012-92fcf397e862"
            }}
            style={styles.ImageBackground_2_2050}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6b01335-4beb-4bc7-a191-24def8c1d4be"
            }}
            style={styles.ImageBackground_2_2051}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d41d1a4c-86b9-4d15-ad01-71f53b14982e"
            }}
            style={styles.ImageBackground_2_2052}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b736d09-928c-4992-a9ea-3aceb6035068"
            }}
            style={styles.ImageBackground_2_2053}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/639bc95b-bf08-40bd-8195-f055b90a4c3e"
            }}
            style={styles.ImageBackground_2_2054}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2be96c71-bbb4-4ca6-8ae2-51057c63bcd5"
            }}
            style={styles.ImageBackground_2_2055}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18c0acae-0c1e-4218-a3e6-ba5d7302a0d7"
            }}
            style={styles.ImageBackground_2_2056}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e8628d3-f8f3-4e97-adbb-a41565237e62"
            }}
            style={styles.ImageBackground_2_2057}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/847f7060-3213-411d-b7ad-05d144c70dae"
            }}
            style={styles.ImageBackground_2_2058}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1814a158-c31e-4f43-b869-5e9eec3bd49c"
            }}
            style={styles.ImageBackground_2_2059}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8444c7fc-f23d-4b57-9a4c-f032ee1adf03"
            }}
            style={styles.ImageBackground_2_2060}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/114c6a7b-d712-47cf-b7c1-a909e8faa538"
            }}
            style={styles.ImageBackground_2_2061}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee6d53ef-262d-49c6-84dd-31c1646ff50d"
            }}
            style={styles.ImageBackground_2_2062}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a5665d0-bf03-42e1-ba64-f37577b69a6e"
            }}
            style={styles.ImageBackground_2_2063}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a05bf4c3-f29d-4f78-82bf-4bf61f264be0"
            }}
            style={styles.ImageBackground_2_2064}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b65ae63d-7f1b-4e53-b30f-aca64f588fac"
            }}
            style={styles.ImageBackground_2_2065}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67e1dd86-117e-4564-a277-282d59f9cbb7"
            }}
            style={styles.ImageBackground_2_2066}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c40adb0-9bb0-42af-8ba3-4e33f5c15c51"
            }}
            style={styles.ImageBackground_2_2067}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/852158c6-de4c-4ffc-b87d-f582b2236de3"
            }}
            style={styles.ImageBackground_2_2068}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85dd75e6-7a79-4701-b471-b0ff140c297a"
            }}
            style={styles.ImageBackground_2_2069}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45ebe64e-db38-4899-ab8c-fcbdec515d65"
            }}
            style={styles.ImageBackground_2_2070}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/398cf96b-2fe2-42f6-8af9-d95b2583bc58"
            }}
            style={styles.ImageBackground_2_2071}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6002969d-3e7a-4ac6-95b6-f5a4367aa121"
            }}
            style={styles.ImageBackground_2_2072}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5de1fba5-c652-47ae-b45f-1f536c7404e9"
            }}
            style={styles.ImageBackground_2_2073}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9aab2126-2360-489d-beda-74d0ba975826"
            }}
            style={styles.ImageBackground_2_2074}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db6c1936-4697-4f0b-b99e-90d16b932a97"
            }}
            style={styles.ImageBackground_2_2075}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f99165d-9133-45a8-9385-1771c11495b4"
            }}
            style={styles.ImageBackground_2_2076}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47b1aa11-6e77-4e43-bca3-28d14520405f"
            }}
            style={styles.ImageBackground_2_2077}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b8d37d8-4078-4841-9dc0-b58fb500ecf6"
            }}
            style={styles.ImageBackground_2_2078}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1835338-25d6-4def-b5c5-98e2664b1f6b"
            }}
            style={styles.ImageBackground_2_2079}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86f26bb8-1103-45b5-90fe-f44ca53bb4df"
            }}
            style={styles.ImageBackground_2_2080}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f71c144-029e-4f6f-854a-0c1d9045d953"
            }}
            style={styles.ImageBackground_2_2081}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e8d6366-05da-4183-9594-9d89f041b73c"
            }}
            style={styles.ImageBackground_2_2082}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ebcfafb-c318-4627-84a6-03023dce6be1"
            }}
            style={styles.ImageBackground_2_2083}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f0d0cfd-5788-42e4-aeea-9b20563c4ba4"
            }}
            style={styles.ImageBackground_2_2084}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d716ee72-2919-4587-9e4c-3cf4ec1ca616"
            }}
            style={styles.ImageBackground_2_2085}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c98edd34-8be3-4337-956b-19d4cdf1723f"
            }}
            style={styles.ImageBackground_2_2086}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78aadd20-1e7c-4897-b7ed-1ae7f8db1c76"
            }}
            style={styles.ImageBackground_2_2087}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8d0168d-72d9-4fd3-bc5d-527c731241c2"
            }}
            style={styles.ImageBackground_2_2088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/520011c1-b19d-4002-b112-f64fa29d943e"
            }}
            style={styles.ImageBackground_2_2089}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18fa40bd-6194-4a91-b66f-92812b2c7ccf"
            }}
            style={styles.ImageBackground_2_2090}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7614e86-1fec-4748-b8b6-febe98dc12d7"
            }}
            style={styles.ImageBackground_2_2091}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c812f45c-821e-4d46-a97b-0db49f242139"
            }}
            style={styles.ImageBackground_2_2092}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb698de8-78e4-46a7-9165-1cd31854fdd1"
            }}
            style={styles.ImageBackground_2_2093}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d4c0ca9-993c-4ed6-a5a5-e07c609c0e67"
            }}
            style={styles.ImageBackground_2_2094}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/042331f0-8380-4fe3-b2f2-8fa0a76c6e14"
            }}
            style={styles.ImageBackground_2_2095}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2808b8a0-9409-4f6b-8517-a436823f91bf"
            }}
            style={styles.ImageBackground_2_2096}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01de790f-c053-4bec-8751-f0ac2a263985"
            }}
            style={styles.ImageBackground_2_2097}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/637c7c35-5167-411e-8c14-e53d10b87a78"
            }}
            style={styles.ImageBackground_2_2098}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca24c767-e6e8-43e6-ae1a-fb3ba2875a6d"
            }}
            style={styles.ImageBackground_2_2099}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae00c9c0-6829-44da-a44e-dd3c45fb5f26"
            }}
            style={styles.ImageBackground_2_2100}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/755c58b0-8499-4459-878a-7d81434fe150"
            }}
            style={styles.ImageBackground_2_2101}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4387a60-f550-4fbb-904c-fe8e2664ecc3"
            }}
            style={styles.ImageBackground_2_2102}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3254f6f4-dd10-48fd-8009-b6ce2f0b2b64"
            }}
            style={styles.ImageBackground_2_2103}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/642701e5-2f64-42d2-9d99-5389f9278842"
            }}
            style={styles.ImageBackground_2_2104}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68065d7a-4d83-4933-a6d2-94493b45a780"
            }}
            style={styles.ImageBackground_2_2105}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30f26842-b5c2-4961-b843-71f19c034486"
            }}
            style={styles.ImageBackground_2_2106}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f389e116-7e30-4a5e-8149-0b2b75628748"
            }}
            style={styles.ImageBackground_2_2107}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be0797f6-23e6-44c0-9a09-55580ff70f51"
            }}
            style={styles.ImageBackground_2_2108}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28a92278-630f-4c43-9d34-fdce29f1235f"
            }}
            style={styles.ImageBackground_2_2109}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60245c20-ab87-4358-b6a1-26c7495f2c1d"
            }}
            style={styles.ImageBackground_2_2110}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2206e3e5-15d7-4cbd-b402-55bfd95d7887"
            }}
            style={styles.ImageBackground_2_2111}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49390010-dd3f-4f4f-a5d1-770af747bddf"
            }}
            style={styles.ImageBackground_2_2112}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92ad9035-1df0-486a-8b09-c55cb6eb4dea"
            }}
            style={styles.ImageBackground_2_2113}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4da6b51c-a605-419b-b270-a45465a39d03"
            }}
            style={styles.ImageBackground_2_2114}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82c297db-3109-49c4-ade6-b99cb9f68bc8"
            }}
            style={styles.ImageBackground_2_2115}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8cb7aea-b42c-4789-bac3-643cd3222bbc"
            }}
            style={styles.ImageBackground_2_2116}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec4bc296-f14e-4342-b66c-078f32b97539"
            }}
            style={styles.ImageBackground_2_2117}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10f47852-c250-4d16-885c-6eb34e230ad3"
            }}
            style={styles.ImageBackground_2_2118}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c34f9ea-cdd4-488d-a1a4-4bd44336d20a"
            }}
            style={styles.ImageBackground_2_2119}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/993651b9-0925-4662-8f23-45edaaf77aad"
            }}
            style={styles.ImageBackground_2_2120}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5c9b76b-f895-4c71-8fc9-5a8c78bf3aa4"
            }}
            style={styles.ImageBackground_2_2121}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d64d474-f0ae-434e-8598-4ee2c4e5147e"
            }}
            style={styles.ImageBackground_2_2122}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b56fff7-ea60-4593-8012-783ddc1aa38d"
            }}
            style={styles.ImageBackground_2_2123}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7f25f47-97fc-4cb4-b2c2-c6c47a4b362e"
            }}
            style={styles.ImageBackground_2_2124}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bea1a08-5cf0-456b-8661-ce27ecd6f103"
            }}
            style={styles.ImageBackground_2_2125}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c86999d-12a8-49a3-8a68-bbc2aa6fb692"
            }}
            style={styles.ImageBackground_2_2126}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06d16916-28f2-41f3-bd03-3e545c762677"
            }}
            style={styles.ImageBackground_2_2127}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c46716f-8f9e-441b-8f37-f5e87fd09008"
            }}
            style={styles.ImageBackground_2_2128}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/338424a4-e186-4ccf-92ad-cbff88893320"
            }}
            style={styles.ImageBackground_2_2129}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c169b38-a4ff-47ab-b015-92ec00105c8b"
            }}
            style={styles.ImageBackground_2_2130}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2754374-71a1-4ce7-ab65-9b4ac55a6cba"
            }}
            style={styles.ImageBackground_2_2131}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47c0819c-15c0-4ae3-8e62-5d6b767879a7"
            }}
            style={styles.ImageBackground_2_2132}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25c723c5-a42b-407b-80b3-2f85ca29b2ed"
            }}
            style={styles.ImageBackground_2_2133}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cae3356-290c-4882-8882-a5486bda2487"
            }}
            style={styles.ImageBackground_2_2134}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6eb8ca4-4401-409d-a25a-d4b1adf0e4ef"
          }}
          style={styles.ImageBackground_2_2214}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9c444b3-8aed-4330-8a23-5411b66fd86d"
          }}
          style={styles.ImageBackground_2_2215}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a912d0ac-182e-400a-a69e-920445e327d1"
          }}
          style={styles.ImageBackground_2_2218}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_2_524: {
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
  View_2_525: {
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
  View_2_526: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_526: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_527: {
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
  View_2_528: {
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
  ImageBackground_2_529: {
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
  View_2_530: {
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
  ImageBackground_2_531: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_535: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_2_540: {
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
  View_2_541: {
    width: wp("88%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_541: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_542: {
    width: wp("88%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_542: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_2_543: {
    width: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("105%")
  },
  View_2_544: {
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
  ImageBackground_2_545: {
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
  View_2_546: {
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
  View_2_547: {
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
  View_2_548: {
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
  Text_2_548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5357142686843872,
    textTransform: "none"
  },
  View_2_1815: {
    width: wp("98%"),
    height: hp("52%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_1816: {
    width: wp("81%"),
    height: hp("43%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_1919: {
    width: wp("44%"),
    height: hp("10%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_1954: {
    width: wp("64%"),
    height: hp("33%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_2044: {
    width: wp("77%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_2_2046: {
    width: wp("28%"),
    height: hp("42%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_2_2047: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_2048: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_2049: {
    width: wp("15%"),
    height: hp("3%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_2050: {
    width: wp("14%"),
    height: hp("0%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_2051: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_2052: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_2053: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_2054: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_2_2055: {
    width: wp("16%"),
    height: hp("26%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_2056: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_2057: {
    width: wp("7%"),
    height: hp("23%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_2058: {
    width: wp("7%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2059: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_2060: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_2061: {
    width: wp("15%"),
    height: hp("3%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_2062: {
    width: wp("14%"),
    height: hp("0%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_2063: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_2064: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_2065: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2066: {
    width: wp("14%"),
    height: hp("26%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_2_2067: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_2068: {
    width: wp("3%"),
    height: hp("24%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_2_2069: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2070: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2071: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_2072: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_2073: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_2074: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_2075: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_2076: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_2077: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_2078: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_2079: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_2080: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_2081: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_2082: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_2083: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_2_2084: {
    width: wp("13%"),
    height: hp("9%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_2085: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2086: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2087: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_2088: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_2_2089: {
    width: wp("10%"),
    height: hp("18%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_2090: {
    width: wp("7%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_2091: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_2_2092: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_2_2093: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_2094: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_2095: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_2_2096: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_2097: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_2098: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_2099: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_2100: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_2101: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_2_2102: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_2_2103: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_2_2104: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_2_2105: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_2_2106: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_2107: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_2108: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2109: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_2110: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_2111: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2112: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2113: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_2114: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2115: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_2116: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2117: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2118: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2119: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2120: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_2_2121: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2122: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_2123: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2124: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2125: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_2126: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_2127: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_2128: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2129: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_2130: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_2131: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_2132: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_2133: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_2134: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_2214: {
    width: wp("26%"),
    height: hp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_2215: {
    width: wp("15%"),
    height: hp("10%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_2218: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
