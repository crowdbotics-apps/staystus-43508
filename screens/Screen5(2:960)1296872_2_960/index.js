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
      <View style={styles.View_2_962}>
        <View style={styles.View_2_963}>
          <View style={styles.View_2_964}>
            <Text style={styles.Text_2_964}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_2_965}>
          <View style={styles.View_2_966} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95d2ac40-6c73-45b1-9f46-efa954e8e656"
            }}
            style={styles.ImageBackground_2_967}
          />
          <View style={styles.View_2_968} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/906010c8-cb64-4b48-8206-ddfbd9ce05fb"
          }}
          style={styles.ImageBackground_2_969}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f044fc4-b88f-40bd-bd1d-baf2103905f7"
          }}
          style={styles.ImageBackground_2_973}
        />
      </View>
      <View style={styles.View_2_978} />
      <View style={styles.View_2_979}>
        <Text style={styles.Text_2_979}>Ready to Begin?</Text>
      </View>
      <View style={styles.View_2_980}>
        <Text style={styles.Text_2_980}>
          Set up your first reminder in just a few taps!
        </Text>
      </View>
      <View style={styles.View_2_986}>
        <Text style={styles.Text_2_986}>Get Started</Text>
      </View>
      <View style={styles.View_2_1427} />
      <View style={styles.View_2_1428}>
        <Text style={styles.Text_2_1428}>Get Started</Text>
      </View>
      <View style={styles.View_24_2723}>
        <View style={styles.View_24_2724}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c441b3b0-c3ce-438f-b3fd-8cd1537ad0af"
            }}
            style={styles.ImageBackground_24_2725}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e33f167c-aed8-43dd-a93d-853dbafd81cc"
            }}
            style={styles.ImageBackground_24_2726}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7223724a-587a-4274-b5aa-953265eec4a9"
            }}
            style={styles.ImageBackground_24_2727}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7619ba79-ce5c-4035-9216-2ea62afe2f4f"
            }}
            style={styles.ImageBackground_24_2728}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9609be49-1839-4de3-afa2-a37f55fd1305"
            }}
            style={styles.ImageBackground_24_2729}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85fd5e0a-286d-4de8-be21-de46aee09385"
            }}
            style={styles.ImageBackground_24_2730}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b72a47b6-b5cb-4a9e-a651-e95e68d94fde"
            }}
            style={styles.ImageBackground_24_2731}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83fa180c-f120-451d-b7f1-b3846fe8381a"
            }}
            style={styles.ImageBackground_24_2732}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c44b2ab-28d4-461e-bd63-67185e72e734"
            }}
            style={styles.ImageBackground_24_2733}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07d7879d-bd3b-4c29-8ea3-e0401d2b26f3"
            }}
            style={styles.ImageBackground_24_2734}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/349b84c3-95e7-4fdc-a51e-1bb4f5fed84a"
            }}
            style={styles.ImageBackground_24_2735}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6652638-9b17-4495-ae3d-eba2531dc738"
            }}
            style={styles.ImageBackground_24_2736}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee90123f-ce5e-4113-b551-f785b24518ec"
            }}
            style={styles.ImageBackground_24_2738}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9409337-72e9-44dc-a18a-5c1c4daff965"
            }}
            style={styles.ImageBackground_24_2739}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75419207-2e39-4950-8521-b95b00fdf8c6"
            }}
            style={styles.ImageBackground_24_2740}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/522e017b-842f-460a-a1fc-d867cb8073dc"
            }}
            style={styles.ImageBackground_24_2741}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c3b64b8-7f2e-40c4-baae-88fbeadec33f"
            }}
            style={styles.ImageBackground_24_2742}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cf5a778-2bea-42df-b9d9-1d9dc2873ef6"
            }}
            style={styles.ImageBackground_24_2743}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d85a05e6-6253-411e-8e24-1476dc27938b"
            }}
            style={styles.ImageBackground_24_2744}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dabff4d-be38-4eb3-b1de-7cb45d4683e6"
            }}
            style={styles.ImageBackground_24_2745}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8abf2227-a22c-45cf-8a4e-bbddcc2ee435"
            }}
            style={styles.ImageBackground_24_2746}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d1a6a5e-e7cc-4529-a96b-c9a7843b917a"
            }}
            style={styles.ImageBackground_24_2747}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe1919cf-50ee-4849-a822-87ddb371351a"
            }}
            style={styles.ImageBackground_24_2748}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2affced-1593-4b40-9e2e-492d7d478c69"
            }}
            style={styles.ImageBackground_24_2749}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e75bc7a-57da-4596-aff4-b2b040d1ea28"
            }}
            style={styles.ImageBackground_24_2750}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25f72c99-6401-4363-b7cd-767e6ba34d82"
            }}
            style={styles.ImageBackground_24_2751}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb463cf7-2d3b-4f55-85ce-f6bc882dad6a"
            }}
            style={styles.ImageBackground_24_2752}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1075891-6335-4773-80ba-e2538ccf97c6"
            }}
            style={styles.ImageBackground_24_2753}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/920ce132-5760-4b72-9456-a512a48066ea"
            }}
            style={styles.ImageBackground_24_2754}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91e1fd19-c040-4bf9-bf5a-07a78432f38b"
            }}
            style={styles.ImageBackground_24_2755}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/405e298e-71d3-48a9-8258-a6007967f49f"
            }}
            style={styles.ImageBackground_24_2756}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cfd24d4-6bc4-4c35-a190-9f5a145bbc39"
            }}
            style={styles.ImageBackground_24_2757}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e539084-9cbe-40c4-a412-905da3799d9e"
            }}
            style={styles.ImageBackground_24_2758}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2481deb8-0fa1-4e5f-8ec9-7fabe8e69c26"
            }}
            style={styles.ImageBackground_24_2759}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cf2f2ca-8a78-43d6-bb76-6730029294d7"
            }}
            style={styles.ImageBackground_24_2760}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7957ecf-97cc-443c-b818-694133438b03"
            }}
            style={styles.ImageBackground_24_2761}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecae9a9d-7dee-4c63-89a2-b343b15b0ab9"
            }}
            style={styles.ImageBackground_24_2762}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9dad977-d55a-4b71-8ea9-459a1688a438"
            }}
            style={styles.ImageBackground_24_2763}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/271806af-fbcf-4cb3-9a4c-df2379c5220b"
            }}
            style={styles.ImageBackground_24_2764}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dad4b368-8e31-4f3b-85d9-776ddfbb8104"
            }}
            style={styles.ImageBackground_24_2765}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33a25923-c668-420a-9d22-bf5e511b8f5a"
            }}
            style={styles.ImageBackground_24_2766}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccff6ba7-3c82-4ffe-9242-1562c0c41f64"
            }}
            style={styles.ImageBackground_24_2767}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3d756de-4d6e-4e1d-b6a0-6cad67aeb1ec"
            }}
            style={styles.ImageBackground_24_2768}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0471f479-aa30-4a2c-acf1-4721093013b4"
            }}
            style={styles.ImageBackground_24_2769}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b2da6a1-a16a-4236-8f41-eb86fb417485"
            }}
            style={styles.ImageBackground_24_2770}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74dc74b4-57f3-4562-89a0-98a09b1cf7d2"
            }}
            style={styles.ImageBackground_24_2771}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0209f77b-0990-4409-be03-2ab384ba01ff"
            }}
            style={styles.ImageBackground_24_2772}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/104f723a-0ee8-4cf3-94e0-0e01024ca597"
            }}
            style={styles.ImageBackground_24_2773}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b95d712-1ef4-425e-9e90-e93e96ef193f"
            }}
            style={styles.ImageBackground_24_2774}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0337c20-8a09-44c0-9660-7617a2d92f90"
            }}
            style={styles.ImageBackground_24_2775}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f351648-a17b-4905-8e0c-8390d27c534d"
            }}
            style={styles.ImageBackground_24_2776}
          />
        </View>
        <View style={styles.View_24_2777}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c38a7b32-46fd-4676-8d4f-ec9a7a0dc5c9"
            }}
            style={styles.ImageBackground_24_2778}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/554189ac-c599-4a66-86e5-8a0319ee6d6c"
            }}
            style={styles.ImageBackground_24_2779}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b99bcf01-a7a9-4d61-a650-7eac42e1e5e3"
            }}
            style={styles.ImageBackground_24_2781}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f067f1be-8378-4fbe-8b1e-22e0772326aa"
            }}
            style={styles.ImageBackground_24_2782}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47b13caf-c169-4da9-b6be-2615e8fd2c95"
            }}
            style={styles.ImageBackground_24_2793}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59826339-ae3b-4577-9bfe-dd4c8a9c80e6"
            }}
            style={styles.ImageBackground_24_2794}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29770e30-dcb0-47d7-b186-c9d975a10908"
            }}
            style={styles.ImageBackground_24_2796}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c15b217f-4a0e-4c51-a022-5ee2f92cafee"
            }}
            style={styles.ImageBackground_24_2797}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/979ec65d-5090-421d-bbce-69a9484e5c53"
            }}
            style={styles.ImageBackground_24_2798}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64a830ab-ab47-44a5-89b2-22238f9d37df"
            }}
            style={styles.ImageBackground_24_2799}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1423e62-d88c-4ae7-bcd0-9f393f821fff"
            }}
            style={styles.ImageBackground_24_2800}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d5f1401-ae4f-44bf-bff0-c8edfda92917"
            }}
            style={styles.ImageBackground_24_2801}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89e7e1ad-f74b-47ff-9b3e-e07312bf0700"
            }}
            style={styles.ImageBackground_24_2802}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d30fb0df-7d44-4fae-bbf3-f236696850e4"
            }}
            style={styles.ImageBackground_24_2803}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71a269e9-eea2-431c-a4aa-2f64b1cde92a"
            }}
            style={styles.ImageBackground_24_2804}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bdcf577-8682-45f3-83d7-3bf07e0bbbf0"
            }}
            style={styles.ImageBackground_24_2805}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f69fc7f9-26ca-4a77-99be-cd50c467cf5d"
            }}
            style={styles.ImageBackground_24_2806}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f4b5792-89a9-496d-b477-bc874f7486c2"
            }}
            style={styles.ImageBackground_24_2807}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27082396-e472-4992-97c7-98b7a0951aa5"
            }}
            style={styles.ImageBackground_24_2808}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01466b24-ab99-4d9a-a38d-c8de7b997a79"
            }}
            style={styles.ImageBackground_24_2809}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31dc9b92-9b0f-442c-a437-93a4f9722d1c"
            }}
            style={styles.ImageBackground_24_2810}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb1f0b3d-3845-4498-9bde-d2afb1c0bae9"
            }}
            style={styles.ImageBackground_24_2811}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8806b88d-3b56-471f-8bfb-5e1ee65f2931"
            }}
            style={styles.ImageBackground_24_2812}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24989389-d457-424f-ab7f-2e51a77c1dd0"
            }}
            style={styles.ImageBackground_24_2813}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb03e5a4-c429-4ee9-8c09-4290830d741f"
            }}
            style={styles.ImageBackground_24_2814}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbbad9d1-bc3e-44e0-9bad-75b61688deaf"
            }}
            style={styles.ImageBackground_24_2815}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3c16c00-ca86-4a58-b666-95084fa3b683"
            }}
            style={styles.ImageBackground_24_2816}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23a69c88-5d3b-43a5-bc64-acb6353022ca"
            }}
            style={styles.ImageBackground_24_2817}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a20b9dfb-d6d1-4789-8f97-86fff54de5c8"
            }}
            style={styles.ImageBackground_24_2818}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94d5e416-525d-4cad-8f1d-2b34c86fd113"
            }}
            style={styles.ImageBackground_24_2819}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b8df1b4-f9a1-4d07-9f48-ecc5a0dc4a20"
            }}
            style={styles.ImageBackground_24_2821}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22badc63-a36e-4603-9a76-e06fe5b960df"
            }}
            style={styles.ImageBackground_24_2822}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa90e442-68aa-413a-a14b-3f098143184f"
            }}
            style={styles.ImageBackground_24_2823}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8818cca3-54b5-4d3f-ade9-1eff281e3cde"
            }}
            style={styles.ImageBackground_24_2824}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7ee029a-45e8-4b91-aff0-b07ab71ac250"
            }}
            style={styles.ImageBackground_24_2825}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1858ee0c-3ef4-4e7d-9508-dd6bb3728f0a"
            }}
            style={styles.ImageBackground_24_2826}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/896d9094-c500-4089-b92c-e51488f3e124"
            }}
            style={styles.ImageBackground_24_2827}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/291deeb3-83d7-4536-8e4b-5a77d6828cca"
            }}
            style={styles.ImageBackground_24_2828}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2777d75f-a1e3-4e04-a58e-b649c5a0e8ce"
            }}
            style={styles.ImageBackground_24_2829}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02ea47b2-3a26-48db-994d-c37a867e2e4a"
            }}
            style={styles.ImageBackground_24_2830}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c22e097-15f8-464d-9e51-6a66db72b560"
            }}
            style={styles.ImageBackground_24_2831}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3165db7-252b-4b60-aa01-e34e9a196515"
            }}
            style={styles.ImageBackground_24_2832}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a5b8306-bb11-462e-8de6-90ca18bba86a"
            }}
            style={styles.ImageBackground_24_2834}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5504acf7-59fc-4576-b6ff-90d538d0acde"
            }}
            style={styles.ImageBackground_24_2835}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a75145d2-1846-47a4-a4a7-a62817d0b5b9"
            }}
            style={styles.ImageBackground_24_2836}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df8cc4a5-7d43-46e4-b179-dd63b159831e"
            }}
            style={styles.ImageBackground_24_2837}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d6df5bf-49da-460f-afe1-5d44107d276c"
            }}
            style={styles.ImageBackground_24_2838}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8a715ba-6685-4aad-be48-5a1d03dc043b"
            }}
            style={styles.ImageBackground_24_2839}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e3dac06-547d-4dc0-9aa8-44f92e0088b4"
            }}
            style={styles.ImageBackground_24_2840}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e247ad0-51d5-4d24-990c-1007d184d4d7"
          }}
          style={styles.ImageBackground_24_2841}
        />
        <View style={styles.View_24_2852}>
          <Text style={styles.Text_24_2852}>Lets Start</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_2_962: {
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
  View_2_963: {
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
  View_2_964: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_964: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_965: {
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
  View_2_966: {
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
  ImageBackground_2_967: {
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
  View_2_968: {
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
  ImageBackground_2_969: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_973: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_2_978: {
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
  View_2_979: {
    width: wp("88%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_979: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_980: {
    width: wp("88%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_980: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_2_986: {
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
  Text_2_986: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5357142686843872,
    textTransform: "none"
  },
  View_2_1427: {
    width: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("100%"),
    backgroundColor: "rgba(46, 94, 78, 1)"
  },
  View_2_1428: {
    width: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("103%"),
    justifyContent: "flex-start"
  },
  Text_2_1428: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5357142686843872,
    textTransform: "none"
  },
  View_24_2723: {
    width: wp("98%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_24_2724: {
    width: wp("86%"),
    height: hp("28%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2725: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_24_2726: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_24_2727: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_24_2728: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_24_2729: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2730: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_24_2731: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2732: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_24_2733: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_24_2734: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_24_2735: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2736: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_24_2738: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_24_2739: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_24_2740: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_24_2741: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_24_2742: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_24_2743: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_24_2744: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_24_2745: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_24_2746: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_24_2747: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_24_2748: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_24_2749: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_24_2750: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_24_2751: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_24_2752: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_24_2753: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_24_2754: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_24_2756: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2757: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_24_2758: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_24_2759: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_24_2760: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_24_2761: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_24_2762: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2763: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2764: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_24_2765: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_24_2766: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_24_2767: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_24_2768: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_24_2769: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_24_2770: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_24_2771: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_24_2772: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_24_2773: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2774: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_24_2775: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_24_2776: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_24_2777: {
    width: wp("69%"),
    height: hp("20%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_24_2778: {
    width: wp("69%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_24_2779: {
    width: wp("69%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_24_2781: {
    width: wp("69%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_24_2782: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_24_2793: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_24_2794: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_24_2796: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_24_2797: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_24_2798: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_24_2799: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_24_2800: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_24_2801: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_24_2802: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_24_2803: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_24_2804: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_24_2805: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_24_2806: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_24_2807: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_24_2808: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_24_2809: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_24_2810: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_24_2811: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_24_2812: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_24_2813: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_24_2814: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_24_2815: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_24_2816: {
    width: wp("23%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_24_2817: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_24_2818: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_24_2819: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_24_2821: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_24_2822: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_24_2823: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_24_2824: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_24_2825: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_24_2826: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_24_2827: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_24_2828: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_24_2829: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2830: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2831: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_24_2832: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_24_2834: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_24_2835: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_24_2836: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_24_2837: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_24_2838: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_24_2839: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_24_2840: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_24_2841: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_24_2852: {
    width: wp("31%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_24_2852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
