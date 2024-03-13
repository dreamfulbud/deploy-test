import { Map, MapMarker } from "react-kakao-maps-sdk";
import styles from "./Location.module.scss";
const Location = ({ address }: { address: string }) => {
  const LAT_LNG = { lat: 33.500328, lng: 126.529966 };

  return (
    <div className="max-wrap">
      <h3 className="section-title">찾아오시는 길</h3>
      <p className={styles.address}>{address}</p>
      <div className={styles.map}>
        <Map
          center={LAT_LNG}
          style={{ width: "100%", height: "100%" }}
          level={4}
        >
          <MapMarker // 마커를 생성합니다
            position={LAT_LNG}
            image={{
              src: "/images/mark.png", // 마커이미지의 주소입니다
              size: {
                width: 45,
                height: 60,
              },
            }}
          />
        </Map>
      </div>

      <div className={styles.links}>
        <a href="https://maps.app.goo.gl/9vvUZLEb7W5hRMuK8" target="_blank">
          Google Maps
        </a>
        <a href="https://kko.to/RR2eZjDDS9" target="_blank">
          Kakao Map
        </a>

        <a href="https://naver.me/5NAsNQGh" target="_blank">
          Naver Map
        </a>
      </div>
    </div>
  );
};

export default Location;