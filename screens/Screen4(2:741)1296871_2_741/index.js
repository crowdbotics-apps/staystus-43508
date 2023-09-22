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
      <View style={styles.View_2_743}>
        <View style={styles.View_2_744}>
          <View style={styles.View_2_745}>
            <Text style={styles.Text_2_745}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_2_746}>
          <View style={styles.View_2_747} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b833ed9-129c-4d9b-b25b-784a5833429b"
            }}
            style={styles.ImageBackground_2_748}
          />
          <View style={styles.View_2_749} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0be8747-213e-4ed2-a89f-f3410a9a3c98"
          }}
          style={styles.ImageBackground_2_750}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e957a08-4d5f-4b86-8ec5-4623b4729f55"
          }}
          style={styles.ImageBackground_2_754}
        />
      </View>
      <View style={styles.View_2_759} />
      <View style={styles.View_2_760}>
        <Text style={styles.Text_2_760}>Stay Notified.</Text>
      </View>
      <View style={styles.View_2_761}>
        <Text style={styles.Text_2_761}>
          Receive timely alerts for all your important dates.
        </Text>
      </View>
      <View style={styles.View_2_762}>
        <View style={styles.View_2_763}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f5f7bbc-e2cb-4872-88d0-ab4eded12473"
            }}
            style={styles.ImageBackground_2_764}
          />
          <View style={styles.View_2_765} />
          <View style={styles.View_2_766} />
        </View>
      </View>
      <View style={styles.View_2_767}>
        <Text style={styles.Text_2_767}>Get Started</Text>
      </View>
      <View style={styles.View_2_1643}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6ebef82-7250-4590-bd93-04499cd3e09a"
          }}
          style={styles.ImageBackground_2_1644}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcd37ca2-ce51-415a-b1a5-ce6c6597e547"
          }}
          style={styles.ImageBackground_2_1664}
        />
        <View style={styles.View_2_1686}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d14a5ca4-f3f1-45fd-b8a2-9be7f4363426"
            }}
            style={styles.ImageBackground_2_1687}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7286409-4456-4f62-a7a7-38c6efcf11ce"
            }}
            style={styles.ImageBackground_2_1688}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e907bdd-2358-41fb-9d45-366c01858277"
            }}
            style={styles.ImageBackground_2_1689}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0187ad3-6c1a-48df-8178-9f80e1df2bc9"
            }}
            style={styles.ImageBackground_2_1690}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e32c2b0c-ab15-4c80-9cf8-8619937112b5"
            }}
            style={styles.ImageBackground_2_1691}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8248849-8e87-49fc-ac53-86ada4e9fffc"
            }}
            style={styles.ImageBackground_2_1692}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce278190-d0ff-493e-ba93-1eae8a33ce0d"
            }}
            style={styles.ImageBackground_2_1693}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4d7367d-9f0f-4aa3-8a39-730a4922f63a"
            }}
            style={styles.ImageBackground_2_1694}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b68bbb3e-8035-4974-ba1c-8e26117b7247"
            }}
            style={styles.ImageBackground_2_1695}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40da813e-8f90-4b45-b647-dfa4bf06471d"
            }}
            style={styles.ImageBackground_2_1696}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5524bd0b-8cfe-4195-a764-6754b80a1a40"
            }}
            style={styles.ImageBackground_2_1697}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abcfa000-5519-4dbc-8a67-533dc5272997"
            }}
            style={styles.ImageBackground_2_1698}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ac977db-e9ad-4e74-b74f-ca635fa7f4f3"
            }}
            style={styles.ImageBackground_2_1699}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4caffed-f461-4c00-aeaa-2b079efa3b0f"
            }}
            style={styles.ImageBackground_2_1700}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d060c803-a045-4e55-acd0-ca0741c5988a"
            }}
            style={styles.ImageBackground_2_1701}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be949e9c-0eee-40ec-b2c5-c079344d1e22"
            }}
            style={styles.ImageBackground_2_1702}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b53c9793-e3c1-4578-8741-f584c20c626b"
            }}
            style={styles.ImageBackground_2_1703}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/686d290a-9fed-4899-8f7e-6d36acb22965"
            }}
            style={styles.ImageBackground_2_1704}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65d576b3-3c61-4978-91e0-18c7ef1548f8"
            }}
            style={styles.ImageBackground_2_1705}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cdaa00b-f277-45b9-bdca-eef8a3889f7a"
            }}
            style={styles.ImageBackground_2_1706}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb610fb4-2455-4bb2-a6e5-392703948c24"
            }}
            style={styles.ImageBackground_2_1707}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/469ea5ef-cbd3-4ea4-a11d-f9c915ffef42"
            }}
            style={styles.ImageBackground_2_1708}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/806e98c0-dd3d-462b-af64-ba892bf47ba7"
            }}
            style={styles.ImageBackground_2_1709}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cecc0274-3137-458f-8651-506dfc9184c1"
            }}
            style={styles.ImageBackground_2_1710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/124f8401-b9d0-45c2-9704-2d18d378758e"
            }}
            style={styles.ImageBackground_2_1711}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b7f54c9-2f36-4e80-9263-a06c8a8160fd"
            }}
            style={styles.ImageBackground_2_1712}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e18b2855-cf7e-4a56-8a11-7e3a4f743fff"
            }}
            style={styles.ImageBackground_2_1714}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23402c31-1c6a-468a-bb1c-97a8bf4f9e18"
            }}
            style={styles.ImageBackground_2_1715}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebb84818-f260-44c6-86ee-da72dbe7e760"
            }}
            style={styles.ImageBackground_2_1716}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52e1db98-1d1d-4a4e-8ff3-b9d93fe47302"
            }}
            style={styles.ImageBackground_2_1717}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acb55e4b-4c72-4004-b2d7-a1dd9843ce8a"
            }}
            style={styles.ImageBackground_2_1718}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dec7235a-4cf3-4591-b8f7-743c0487ed45"
            }}
            style={styles.ImageBackground_2_1719}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fca0a0db-fb2b-4bd1-8c6c-5af5a67bf618"
            }}
            style={styles.ImageBackground_2_1720}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3df1d50-dfdf-44c8-a4e6-fa631636fb38"
            }}
            style={styles.ImageBackground_2_1721}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b41aa7a-c0c2-438f-b510-6293ddb92aef"
            }}
            style={styles.ImageBackground_2_1722}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fd15b60-864c-4121-8ba4-66df98a8ed94"
            }}
            style={styles.ImageBackground_2_1723}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8f99f11-5ed6-4e7e-8a41-1a58b162cfdb"
            }}
            style={styles.ImageBackground_2_1725}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a4963c0-7eda-4007-9d2f-cc20dd6ca0b1"
            }}
            style={styles.ImageBackground_2_1727}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9a6d8d3-9278-401d-afbc-546882c60c50"
            }}
            style={styles.ImageBackground_2_1728}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83a25657-4c2c-4e6c-93af-4b5da82f9756"
            }}
            style={styles.ImageBackground_2_1729}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71e8dcfc-9766-4474-a107-437723a394fe"
            }}
            style={styles.ImageBackground_2_1730}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3032729-0e8b-475c-8050-013c0e2fc718"
            }}
            style={styles.ImageBackground_2_1731}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5466ffea-747d-42a5-8bab-1b31134489d3"
            }}
            style={styles.ImageBackground_2_1733}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c2d715e-7294-4e70-9387-3094e9db28a1"
            }}
            style={styles.ImageBackground_2_1734}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2c3e014-9252-4cb0-9735-a96657f3e48a"
            }}
            style={styles.ImageBackground_2_1735}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab9a4fc7-8bb7-4928-a8e9-0f4345f781df"
            }}
            style={styles.ImageBackground_2_1736}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08521855-b326-474d-a9ee-ba7f4fd9c2ba"
            }}
            style={styles.ImageBackground_2_1738}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdb69b59-192c-46eb-9407-96353fc3f8b9"
            }}
            style={styles.ImageBackground_2_1740}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/555abeb5-d256-4ca1-bcce-dd26d1d8ab99"
            }}
            style={styles.ImageBackground_2_1741}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4846ed4c-5829-44ae-a8ae-ade5ee6eb6be"
            }}
            style={styles.ImageBackground_2_1742}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f7c7c67-defa-415f-83b6-519849e87e4e"
            }}
            style={styles.ImageBackground_2_1743}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/572180ff-8307-48a5-be33-e178e0c4214e"
            }}
            style={styles.ImageBackground_2_1744}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ce88efa-4b69-489b-ba63-89a5d7897af7"
            }}
            style={styles.ImageBackground_2_1746}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/458eaa9c-a193-4426-b046-92d529550256"
            }}
            style={styles.ImageBackground_2_1747}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7665011-0722-4d48-9087-0d93956a8592"
            }}
            style={styles.ImageBackground_2_1748}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf39b749-75f9-4f84-99b9-3170087df06d"
            }}
            style={styles.ImageBackground_2_1749}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24b2c99b-3ee6-46a0-9b59-c8c6f8c156db"
            }}
            style={styles.ImageBackground_2_1750}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47df5144-7f2d-4581-935a-8d98e2934248"
            }}
            style={styles.ImageBackground_2_1751}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19f82d25-04ee-41dc-bd05-66af82819b07"
            }}
            style={styles.ImageBackground_2_1752}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6b697d4-b330-4a32-a44e-823dbec35cea"
            }}
            style={styles.ImageBackground_2_1753}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af1528ff-40d4-4dc5-883f-cc10e45bf9cf"
            }}
            style={styles.ImageBackground_2_1754}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1324dd33-95f8-4444-bb4c-39301ee4f878"
            }}
            style={styles.ImageBackground_2_1755}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/559b168c-8afb-49a4-a1f0-ca8f9c5fb82d"
            }}
            style={styles.ImageBackground_2_1756}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6531eecc-1ea6-497a-b532-3581151749e3"
            }}
            style={styles.ImageBackground_2_1757}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70a71975-4dd7-4813-a6fc-70f8227b2c40"
            }}
            style={styles.ImageBackground_2_1759}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3ee0299-9057-42f3-bc69-16841b15615c"
            }}
            style={styles.ImageBackground_2_1760}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bf3822d-0bfa-4809-980e-97efb2196b78"
            }}
            style={styles.ImageBackground_2_1761}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/946edce0-1f41-44cb-9bbe-b3f21f330125"
            }}
            style={styles.ImageBackground_2_1762}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dc0115f-5f07-44d3-a459-b5a96e0975b6"
            }}
            style={styles.ImageBackground_2_1763}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76481690-d464-4196-97ad-8ec4c1e10e92"
            }}
            style={styles.ImageBackground_2_1764}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38e196b2-fa19-4ead-8705-2c000d6a71d1"
            }}
            style={styles.ImageBackground_2_1765}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53fd1beb-79e1-4f6d-aa08-c8ab18fa737e"
            }}
            style={styles.ImageBackground_2_1766}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14dbfe88-27c8-49fa-a3f6-3e4991542b55"
            }}
            style={styles.ImageBackground_2_1767}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf5b9523-be8f-4232-b7d2-679c848fb4bb"
          }}
          style={styles.ImageBackground_2_1768}
        />
        <View style={styles.View_2_1796}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62d7dd2a-5a40-43c2-968f-1966cbcbf40a"
            }}
            style={styles.ImageBackground_2_1797}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60575963-f64d-40b9-829b-638ddeacfe15"
            }}
            style={styles.ImageBackground_2_1798}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1f45e81-8eca-4735-ac9e-f860a7e9918e"
            }}
            style={styles.ImageBackground_2_1799}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a836caf1-88da-4b10-b00b-54a14d580635"
            }}
            style={styles.ImageBackground_2_1801}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e555b431-e4d5-4f00-a04f-bbcddc82d30d"
            }}
            style={styles.ImageBackground_2_1802}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a737fef-80a2-4ed6-92d5-704e1a21b08f"
            }}
            style={styles.ImageBackground_2_1803}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65f0643d-591f-483a-b703-7cb17d61cfb7"
            }}
            style={styles.ImageBackground_2_1804}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f4bc99c-db2d-4ff1-8eb4-fdd708dccf52"
            }}
            style={styles.ImageBackground_2_1805}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8086211f-2066-48a0-ba9b-513520bb9fe0"
            }}
            style={styles.ImageBackground_2_1806}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45632ded-a827-40f0-a6c3-c835ea50403a"
            }}
            style={styles.ImageBackground_2_1807}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37bf7305-799e-48bd-9549-5a1c59e7aa36"
            }}
            style={styles.ImageBackground_2_1808}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d429c3c4-3370-429c-b2a4-581743002edd"
            }}
            style={styles.ImageBackground_2_1809}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba7f4d9f-44cf-435a-973c-a325b4c79ad1"
          }}
          style={styles.ImageBackground_2_1810}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_2_743: {
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
  View_2_744: {
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
  View_2_745: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_746: {
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
  View_2_747: {
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
  ImageBackground_2_748: {
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
  View_2_749: {
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
  ImageBackground_2_750: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_754: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_2_759: {
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
  View_2_760: {
    width: wp("88%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_760: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_761: {
    width: wp("88%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_761: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_2_762: {
    width: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("105%")
  },
  View_2_763: {
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
  ImageBackground_2_764: {
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
  View_2_765: {
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
  View_2_766: {
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
  View_2_767: {
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
  Text_2_767: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5357142686843872,
    textTransform: "none"
  },
  View_2_1643: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_1644: {
    width: wp("82%"),
    height: hp("45%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_2_1664: {
    width: wp("32%"),
    height: hp("35%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_2_1686: {
    width: wp("50%"),
    height: hp("32%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_1687: {
    width: wp("14%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_1688: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_1689: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_1690: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_1691: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_2_1692: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_1693: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_2_1694: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_1695: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_2_1696: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_1697: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_1698: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_2_1699: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_2_1700: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_1701: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_2_1702: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_2_1703: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_1704: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_2_1705: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_2_1706: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_2_1707: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_2_1708: {
    width: wp("14%"),
    height: hp("10%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_1709: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_1710: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_1711: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_1712: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_1714: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_1715: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_1716: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_2_1717: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_2_1718: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_2_1719: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_2_1720: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_1721: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_1722: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_2_1723: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_2_1725: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_2_1727: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_2_1728: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_1729: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_2_1730: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_2_1731: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_2_1733: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_2_1734: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_2_1735: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_2_1736: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_2_1738: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_2_1740: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_2_1741: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_2_1742: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_2_1743: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_2_1744: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_2_1746: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_2_1747: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_2_1748: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_2_1749: {
    width: wp("19%"),
    height: hp("7%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_1750: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_2_1751: {
    width: wp("14%"),
    height: hp("12%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_2_1752: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_2_1753: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_2_1754: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_2_1755: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_2_1756: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_2_1757: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_2_1759: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_1760: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_2_1761: {
    width: wp("34%"),
    height: hp("16%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_1762: {
    width: wp("26%"),
    height: hp("16%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_1763: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_2_1764: {
    width: wp("14%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_1765: {
    width: wp("21%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_1766: {
    width: wp("30%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_1767: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_1768: {
    width: wp("40%"),
    height: hp("18%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_2_1796: {
    width: wp("23%"),
    height: hp("21%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_2_1797: {
    width: wp("8%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_1798: {
    width: wp("8%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_1799: {
    width: wp("8%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_2_1801: {
    width: wp("6%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_1802: {
    width: wp("9%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_2_1803: {
    width: wp("3%"),
    height: hp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_1804: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_1805: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_1806: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_1807: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_1808: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_1809: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_1810: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
