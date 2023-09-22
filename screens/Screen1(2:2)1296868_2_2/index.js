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
      <View style={styles.View_2_4}>
        <View style={styles.View_2_5}>
          <View style={styles.View_2_6}>
            <Text style={styles.Text_2_6}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_2_7}>
          <View style={styles.View_2_8} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9a8b240-8dae-4b58-b26a-31f9f83bb76e"
            }}
            style={styles.ImageBackground_2_9}
          />
          <View style={styles.View_2_10} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2f70847-4b45-486a-8889-c812104192ac"
          }}
          style={styles.ImageBackground_2_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f9cfb37-094b-4d41-a795-e82fc0303175"
          }}
          style={styles.ImageBackground_2_15}
        />
      </View>
      <View style={styles.View_2_20} />
      <View style={styles.View_2_22}>
        <Text style={styles.Text_2_22}>
          Welcome to Staytus! Your personal immigration reminder.
        </Text>
      </View>
      <View style={styles.View_2_302}>
        <Text style={styles.Text_2_302}>
          Never miss an important date again.
        </Text>
      </View>
      <View style={styles.View_2_23}>
        <View style={styles.View_2_24}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b78d98c-df52-4d5f-b823-e6144e94d3f8"
            }}
            style={styles.ImageBackground_2_25}
          />
          <View style={styles.View_2_26} />
          <View style={styles.View_2_27} />
        </View>
      </View>
      <View style={styles.View_2_29}>
        <Text style={styles.Text_2_29}>Get Started</Text>
      </View>
      <View style={styles.View_24_2221}>
        <View style={styles.View_24_2486}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cca59b1-5461-44d1-8b07-7cb603eb62a5"
            }}
            style={styles.ImageBackground_24_2487}
          />
          <View style={styles.View_24_2489}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d7d5302-f1f3-45a2-bc4d-edb64a21d8e9"
              }}
              style={styles.ImageBackground_24_2490}
            />
          </View>
          <View style={styles.View_24_2496}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ffc9780-7339-4bed-8e8f-3ac8ad0640bb"
              }}
              style={styles.ImageBackground_24_2497}
            />
          </View>
          <View style={styles.View_24_2559}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5a738cd-ac67-4ed8-8c1c-c8a1da3148f2"
              }}
              style={styles.ImageBackground_24_2560}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8fc1ba8-0439-4e67-869e-e0ad4984cb39"
          }}
          style={styles.ImageBackground_24_2222}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/125788ae-1345-4463-baa2-fdd17943d451"
          }}
          style={styles.ImageBackground_24_2276}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72c91491-0fc3-4d95-9c73-d08e7d6f8b37"
          }}
          style={styles.ImageBackground_24_2278}
        />
        <View style={styles.View_24_2363}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/789466e7-3f1b-461a-94f1-dc1fc8ad25b9"
            }}
            style={styles.ImageBackground_24_2364}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c9885d1-2494-4354-9e88-82bad1144926"
            }}
            style={styles.ImageBackground_24_2365}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b336025-28af-4bfa-895b-2735cb310fe9"
            }}
            style={styles.ImageBackground_24_2366}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be52aea9-8274-4b77-b415-4ae4cdc7374b"
            }}
            style={styles.ImageBackground_24_2367}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/422254fe-4c4d-434b-9f0f-5ee0527a04d3"
            }}
            style={styles.ImageBackground_24_2368}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b65ef6fc-d176-448f-ad9c-d282d865d53d"
            }}
            style={styles.ImageBackground_24_2369}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f6e0632-0adb-4b13-ade6-adc6c080cc10"
            }}
            style={styles.ImageBackground_24_2370}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c44425cf-33fb-492d-8222-7d433542d3c5"
            }}
            style={styles.ImageBackground_24_2371}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/704196a6-1686-4309-af43-048272b8a8f9"
            }}
            style={styles.ImageBackground_24_2372}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e84c56a5-e294-437e-aa06-df2841a2a1bd"
            }}
            style={styles.ImageBackground_24_2373}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e79294b-7b2f-480e-bf4b-fd2bdafc92bf"
            }}
            style={styles.ImageBackground_24_2374}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/921b6c5d-e617-47ec-89af-ee65cde740e6"
            }}
            style={styles.ImageBackground_24_2375}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38759d7b-2e0a-4feb-b9f3-00e99f21e307"
            }}
            style={styles.ImageBackground_24_2376}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f22beac8-872d-435b-944e-d08e24763915"
            }}
            style={styles.ImageBackground_24_2377}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc6eed00-0e09-47db-a132-189b3b131e99"
            }}
            style={styles.ImageBackground_24_2378}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebcc9877-e07d-43dd-ae84-ac1ceb10896e"
            }}
            style={styles.ImageBackground_24_2379}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b380ca6e-3a4a-437e-871f-95cc90a84b35"
            }}
            style={styles.ImageBackground_24_2380}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db5c4715-5140-4aff-b5f7-f61acd7c2cc9"
            }}
            style={styles.ImageBackground_24_2381}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2112e565-fea8-4a4f-bf50-c38d18193ab8"
            }}
            style={styles.ImageBackground_24_2382}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/019b5cbd-df56-47b0-9328-996ba5d19bbe"
            }}
            style={styles.ImageBackground_24_2383}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/711908a9-4b99-460c-9103-1dbe46d3c0cc"
            }}
            style={styles.ImageBackground_24_2384}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4932ed2-5560-455f-b40a-e3e29650b62d"
            }}
            style={styles.ImageBackground_24_2385}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c173ea5-dd6b-44f8-bb8f-15acf011a174"
            }}
            style={styles.ImageBackground_24_2386}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01b33986-15b2-485f-9b95-1bae0e3c9507"
            }}
            style={styles.ImageBackground_24_2387}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/876671a5-0c53-42e2-94b3-7976cff25c3c"
            }}
            style={styles.ImageBackground_24_2388}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcf03325-67e4-47b7-8538-4e19b2130007"
            }}
            style={styles.ImageBackground_24_2389}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f413ef2-bc5a-4dc2-a948-4bd1ab1439a3"
            }}
            style={styles.ImageBackground_24_2390}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8215c6f3-d54e-48f6-939f-f77393bc67c1"
            }}
            style={styles.ImageBackground_24_2391}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0724e33f-16d6-492b-a908-78de7f0731b4"
            }}
            style={styles.ImageBackground_24_2392}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0108de60-ea9d-46bd-b477-72b639279561"
            }}
            style={styles.ImageBackground_24_2393}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3750e84-b74a-4712-ac58-f2c83d030a55"
            }}
            style={styles.ImageBackground_24_2394}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/935928e8-f1d8-4434-9fa5-a93de71a321e"
            }}
            style={styles.ImageBackground_24_2395}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/407a4bba-e780-4e27-930c-dccb95c065d0"
            }}
            style={styles.ImageBackground_24_2396}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc4a0edc-5228-44bc-a66f-29759bd5aecc"
            }}
            style={styles.ImageBackground_24_2397}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55444c59-5f90-4a0b-b3f2-4a1b5757e962"
            }}
            style={styles.ImageBackground_24_2398}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/937652df-f2f5-47b0-9455-3d7b2a158f59"
            }}
            style={styles.ImageBackground_24_2399}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92f33fe3-b5b8-4dc8-bbf7-236589f36d86"
            }}
            style={styles.ImageBackground_24_2400}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c803d0e-d941-4a9b-8f90-569a4ffe3c5a"
            }}
            style={styles.ImageBackground_24_2401}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5737bcad-bae4-4c53-b5a9-c35714300e98"
            }}
            style={styles.ImageBackground_24_2402}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a16e371f-edc1-4005-ac08-230873f3e17d"
            }}
            style={styles.ImageBackground_24_2403}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc495411-7a83-46f5-8d9e-206bdfb5cb0b"
            }}
            style={styles.ImageBackground_24_2404}
          />
        </View>
        <View style={styles.View_24_2406}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a94d761-68d7-46d5-879a-d3ef2a263833"
            }}
            style={styles.ImageBackground_24_2407}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f49088fd-4daf-460e-b897-55717321f0d1"
            }}
            style={styles.ImageBackground_24_2408}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25d461ff-9f3b-471a-86f8-004ca072f466"
            }}
            style={styles.ImageBackground_24_2409}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d2c4223-bc52-42b6-b8ea-ac26b33b80ea"
            }}
            style={styles.ImageBackground_24_2410}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05893197-2f15-4581-a74b-369edb1561c2"
            }}
            style={styles.ImageBackground_24_2411}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c983fdb9-ce8d-446a-8703-f6d10c4f2410"
            }}
            style={styles.ImageBackground_24_2412}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/712845d2-4844-4b13-8f64-0e52625f7448"
            }}
            style={styles.ImageBackground_24_2413}
          />
          <View source={{ uri: "null" }} style={styles.View_24_2414} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86a74770-d01e-4289-b3bd-388a5390c8dd"
            }}
            style={styles.ImageBackground_24_2415}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1805adf8-9d51-4aaf-9676-c8a1cd4fd15c"
            }}
            style={styles.ImageBackground_24_2416}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf277ea3-649c-4cf2-a220-c71604e572d6"
            }}
            style={styles.ImageBackground_24_2417}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f6c93e1-7da6-422d-816f-82273a182756"
            }}
            style={styles.ImageBackground_24_2418}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ace2ddad-8b8b-48d3-8f0d-aa98762dbbac"
            }}
            style={styles.ImageBackground_24_2419}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf94cf66-9998-4188-ae57-f562b1255b1e"
            }}
            style={styles.ImageBackground_24_2420}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1849ec09-130e-4f5d-bd36-2ef818e5a961"
            }}
            style={styles.ImageBackground_24_2421}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0607fda-056f-4d73-878c-3822913d92f6"
            }}
            style={styles.ImageBackground_24_2422}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9c3184f-8c98-495f-8143-ca72fb32a173"
            }}
            style={styles.ImageBackground_24_2423}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61835ea4-8e36-4294-babd-809346794e9c"
            }}
            style={styles.ImageBackground_24_2424}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65205629-dccc-4797-bfd4-3bcff61c8e31"
            }}
            style={styles.ImageBackground_24_2425}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a79ab66-a2ae-4c2a-ac1d-e3a0bbbde17a"
            }}
            style={styles.ImageBackground_24_2426}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/469478f8-0988-4d98-9105-aa896c35d525"
            }}
            style={styles.ImageBackground_24_2427}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd20e6e4-c9a1-4cc8-8772-29d3f0b5e287"
            }}
            style={styles.ImageBackground_24_2428}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f722c48f-25f7-45c1-8801-e460d1db9159"
            }}
            style={styles.ImageBackground_24_2429}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ede6e5fc-3bb0-42dc-ab85-3ac8b992e9f5"
            }}
            style={styles.ImageBackground_24_2430}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4b0d579-940b-445b-bdec-acc7886cee3a"
            }}
            style={styles.ImageBackground_24_2431}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64f5235e-401d-4c3c-b7d4-e4be7bfacfe4"
            }}
            style={styles.ImageBackground_24_2432}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4647d43-3f64-4ab4-afa7-244660419501"
            }}
            style={styles.ImageBackground_24_2433}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2acc0152-ed84-4de9-9d25-a49d811e1d37"
            }}
            style={styles.ImageBackground_24_2434}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19378cc5-96c6-47d3-b2ca-23f097d418b6"
            }}
            style={styles.ImageBackground_24_2436}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15ff4adb-4f4f-4f1a-bd95-1471ca9a5bd9"
            }}
            style={styles.ImageBackground_24_2438}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b521c43-701f-47b8-b8a9-1d1302a67ea9"
            }}
            style={styles.ImageBackground_24_2439}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1b28849-cefc-4ba9-8abf-66e7f420748b"
            }}
            style={styles.ImageBackground_24_2440}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/591369e9-5ae0-4095-b992-0d2ce640e30f"
            }}
            style={styles.ImageBackground_24_2441}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dba0050-72c0-4f47-a297-77b7f190a79e"
            }}
            style={styles.ImageBackground_24_2442}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d035b39b-5004-45ea-9ae3-5f7c68ffa0e0"
            }}
            style={styles.ImageBackground_24_2444}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9828ee94-88d6-445a-8981-62e8366ae717"
            }}
            style={styles.ImageBackground_24_2445}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f414199-5d82-48f3-bcfd-1f998bd57262"
            }}
            style={styles.ImageBackground_24_2446}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2388cc4-0278-460e-a84a-de7188ddda40"
            }}
            style={styles.ImageBackground_24_2447}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22ee79b8-cf98-4b74-b746-4d0bc917f535"
            }}
            style={styles.ImageBackground_24_2449}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f534e483-c1b4-4905-9986-0fe35ae20d01"
            }}
            style={styles.ImageBackground_24_2451}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cbdf637-8685-430a-9899-c71e2ae0fe2e"
            }}
            style={styles.ImageBackground_24_2452}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f42881c1-38f7-4287-bdce-a4ae48a30a60"
            }}
            style={styles.ImageBackground_24_2453}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4a614e7-e808-4024-95ee-890ff5a6b5df"
            }}
            style={styles.ImageBackground_24_2454}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14a257e7-1070-452f-a77c-8b46e9f423fd"
            }}
            style={styles.ImageBackground_24_2455}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/330688f1-e4b7-4fe2-9965-4d40dcc9c3e3"
            }}
            style={styles.ImageBackground_24_2456}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac7e5e43-8eaa-427b-bad8-22f517e17b81"
            }}
            style={styles.ImageBackground_24_2457}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cea7fb5-44a7-4877-a737-4a3f1454887a"
            }}
            style={styles.ImageBackground_24_2458}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7c9fbac-c2d6-4f37-bc32-630df91c4d90"
            }}
            style={styles.ImageBackground_24_2459}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63270cbe-bf8d-48df-bc2f-7dea07a8dcb9"
            }}
            style={styles.ImageBackground_24_2460}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed0d3d18-cb45-4bf3-941f-cb6ece8ec87c"
            }}
            style={styles.ImageBackground_24_2461}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67dadf7a-8eb4-49b3-b055-8608c1e06f5c"
            }}
            style={styles.ImageBackground_24_2462}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a0238fd-a71d-4c86-968c-24c949083929"
            }}
            style={styles.ImageBackground_24_2463}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4eaa9a9-b486-40fe-a23d-53c242c9631f"
            }}
            style={styles.ImageBackground_24_2464}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6a11b7e-c032-4254-8107-5e6b37370a3c"
            }}
            style={styles.ImageBackground_24_2465}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e22942b9-97a6-48ca-96c4-f2272278d8bd"
            }}
            style={styles.ImageBackground_24_2466}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d4dd2d9-1828-4e2b-979b-7167f5bbfee7"
            }}
            style={styles.ImageBackground_24_2467}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c09fc3dd-633d-4b45-ae62-7e99994671bf"
            }}
            style={styles.ImageBackground_24_2468}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d1eae83-2438-492c-9d83-ef08f5789c17"
            }}
            style={styles.ImageBackground_24_2469}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c1ad96c-60b0-4b24-bdab-e075bbb2e8ca"
            }}
            style={styles.ImageBackground_24_2470}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9cf4d12-ff4b-4886-8d50-204f933cf4ea"
            }}
            style={styles.ImageBackground_24_2471}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd5e617b-62c3-4fbf-8a70-615b269b8bf5"
            }}
            style={styles.ImageBackground_24_2472}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7ccc074-a6fe-4b17-b8f2-9c786b482702"
            }}
            style={styles.ImageBackground_24_2473}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78804767-3564-4b6d-b571-b720073d8efd"
            }}
            style={styles.ImageBackground_24_2474}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24e25e5d-4ed9-4fff-a390-b6cf8be5c387"
            }}
            style={styles.ImageBackground_24_2475}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2e621c9-1b5a-4c64-8d70-1ddcc463e0d7"
            }}
            style={styles.ImageBackground_24_2476}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a00d900c-eb6e-426b-beb7-8a2b534a3ce8"
            }}
            style={styles.ImageBackground_24_2477}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d19d18b0-48f8-480a-a082-733b61091480"
            }}
            style={styles.ImageBackground_24_2478}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26c90a0a-a140-4a8c-960a-b5cb50fbcb6c"
            }}
            style={styles.ImageBackground_24_2479}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e77fbfc4-6bfa-4373-a98e-ae7e2d523cfd"
            }}
            style={styles.ImageBackground_24_2480}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18a26b3b-ff7d-4d3f-996b-835c14540b6d"
            }}
            style={styles.ImageBackground_24_2481}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/098c110f-2094-41c4-9863-e72ac1b6fa6d"
            }}
            style={styles.ImageBackground_24_2482}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dbb6d79-fca9-48e3-87c6-253822c2c8c5"
            }}
            style={styles.ImageBackground_24_2483}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86e21c8a-0535-4303-8638-77c6151e94bc"
            }}
            style={styles.ImageBackground_24_2484}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1951c8b1-3608-42eb-b00c-b9a3fa37eb21"
            }}
            style={styles.ImageBackground_24_2485}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_2_4: {
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
  View_2_5: {
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
  View_2_6: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_7: {
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
  View_2_8: {
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
  ImageBackground_2_9: {
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
  View_2_10: {
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
  ImageBackground_2_11: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_15: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_2_20: {
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
  View_2_22: {
    width: wp("88%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_302: {
    width: wp("88%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_2_23: {
    width: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("105%")
  },
  View_2_24: {
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
  ImageBackground_2_25: {
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
  View_2_26: {
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
  View_2_27: {
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
  View_2_29: {
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
  Text_2_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5357142686843872,
    textTransform: "none"
  },
  View_24_2221: {
    width: wp("98%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_24_2486: {
    width: wp("81%"),
    height: hp("42%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_2487: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_24_2489: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_24_2490: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_24_2496: {
    width: wp("47%"),
    height: hp("28%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_24_2497: {
    width: wp("47%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_24_2559: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_24_2560: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_24_2222: {
    width: wp("91%"),
    height: hp("30%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2276: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_24_2278: {
    width: wp("28%"),
    height: hp("18%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  View_24_2363: {
    width: wp("36%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_24_2364: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2365: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_24_2366: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_24_2367: {
    width: wp("14%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_24_2368: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_24_2369: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_24_2370: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_24_2371: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_24_2372: {
    width: wp("28%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_24_2373: {
    width: wp("28%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_24_2374: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_24_2375: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2376: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2377: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2378: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_24_2379: {
    width: wp("21%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_24_2380: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_24_2381: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_24_2382: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_24_2383: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_24_2384: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_24_2385: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_24_2386: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_24_2387: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_24_2388: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_24_2389: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_24_2390: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_24_2391: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_24_2392: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_24_2393: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_24_2394: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_24_2395: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_24_2396: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_24_2397: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_24_2398: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2399: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2400: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_24_2401: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_24_2402: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2403: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_24_2404: {
    width: wp("24%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_24_2406: {
    width: wp("31%"),
    height: hp("31%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2407: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_24_2408: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_24_2409: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_24_2410: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2411: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_24_2412: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2413: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_24_2414: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2415: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2416: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_24_2417: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2418: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2419: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_24_2420: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2421: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2422: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_24_2423: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_24_2424: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_24_2425: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2426: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2427: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_24_2428: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_24_2429: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_24_2430: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2431: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2432: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_24_2433: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2434: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_24_2436: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2438: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2439: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2440: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_24_2441: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_24_2442: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2444: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_24_2445: {
    width: wp("8%"),
    height: hp("17%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_24_2446: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2447: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_24_2449: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2451: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_24_2452: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_24_2453: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_24_2454: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_24_2455: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2456: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_24_2457: {
    width: wp("11%"),
    height: hp("16%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_24_2458: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_24_2459: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_24_2460: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_24_2461: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_24_2462: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_24_2463: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_24_2464: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_24_2465: {
    width: wp("13%"),
    height: hp("10%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2466: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2467: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2468: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2469: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2470: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2471: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2472: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2473: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_24_2474: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_24_2475: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_24_2476: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2477: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_24_2478: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_24_2479: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_24_2480: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_24_2481: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_24_2482: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_24_2483: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_24_2484: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_24_2485: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
