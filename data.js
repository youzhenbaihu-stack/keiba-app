const raceData = {
  // =================================================================
  // 🟢 中山競馬場 (Nakayama)
  // =================================================================
  "中山": {
    "芝": {
      "1200m": {
        "features": "内枠有利が顕著なコース。スタート後の下り坂でスピードに乗りやすく、外枠は距離ロスが大きい。1～3枠の勝率・回収率が優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 10.7, "tan": 99, "fuku": 95},
          {"bracket": "2枠", "winRate": 8.0, "tan": 88, "fuku": 86},
          {"bracket": "3枠", "winRate": 9.8, "tan": 106, "fuku": 90},
          {"bracket": "4枠", "winRate": 5.7, "tan": 63, "fuku": 86},
          {"bracket": "5枠", "winRate": 7.4, "tan": 81, "fuku": 74},
          {"bracket": "6枠", "winRate": 4.4, "tan": 58, "fuku": 69},
          {"bracket": "7枠", "winRate": 7.5, "tan": 78, "fuku": 76},
          {"bracket": "8枠", "winRate": 3.6, "tan": 52, "fuku": 64}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "10-7-2-114", "winRate": 7.5, "rentaiRate": 13.0, "placeRate": 14.0, "tan": 70},
          {"style": "先行", "results": "58-57-58-491", "winRate": 8.7, "rentaiRate": 17.0, "placeRate": 26.0, "tan": 106},
          {"style": "差し", "results": "32-37-34-506", "winRate": 5.3, "rentaiRate": 11.0, "placeRate": 17.0, "tan": 66},
          {"style": "追込", "results": "9-9-15-238", "winRate": 3.3, "rentaiRate": 6.6, "placeRate": 12.0, "tan": 24}
        ]
      },
      "1600m": {
        "features": "おむすび型の変則コース。1枠の勝率・回収率が高く、内枠有利の傾向がある。外枠（特に8枠）は割引が必要。",
        "stats": [
          {"bracket": "1枠", "winRate": 9.2, "tan": 97, "fuku": 96},
          {"bracket": "2枠", "winRate": 8.3, "tan": 90, "fuku": 78},
          {"bracket": "3枠", "winRate": 9.1, "tan": 92, "fuku": 79},
          {"bracket": "4枠", "winRate": 9.6, "tan": 88, "fuku": 82},
          {"bracket": "5枠", "winRate": 7.4, "tan": 78, "fuku": 78},
          {"bracket": "6枠", "winRate": 5.1, "tan": 63, "fuku": 77},
          {"bracket": "7枠", "winRate": 4.5, "tan": 59, "fuku": 76},
          {"bracket": "8枠", "winRate": 4.4, "tan": 61, "fuku": 82}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "19-14-13-163", "winRate": 9.1, "rentaiRate": 16.0, "placeRate": 22.0, "tan": 82},
          {"style": "先行", "results": "86-85-84-873", "winRate": 7.6, "rentaiRate": 15.0, "placeRate": 23.0, "tan": 72},
          {"style": "差し", "results": "73-91-78-895", "winRate": 6.4, "rentaiRate": 14.0, "placeRate": 21.0, "tan": 76},
          {"style": "追込", "results": "23-13-24-423", "winRate": 4.8, "rentaiRate": 7.5, "placeRate": 12.0, "tan": 62}
        ]
      },
      "1800m": {
        "features": "スタートから最初のコーナーまでの距離が短い。外枠の馬はポジショニングがとりづらい上にすぐにコーナーに入るので全体のペースとしても上がりにくい。結果として内枠、先行馬が有利になりやすい。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.9, "tan": 70, "fuku": 88},
          {"bracket": "2枠", "winRate": 7.5, "tan": 78, "fuku": 87},
          {"bracket": "3枠", "winRate": 6.6, "tan": 74, "fuku": 87},
          {"bracket": "4枠", "winRate": 8.3, "tan": 75, "fuku": 82},
          {"bracket": "5枠", "winRate": 5.6, "tan": 62, "fuku": 68},
          {"bracket": "6枠", "winRate": 7.3, "tan": 85, "fuku": 80},
          {"bracket": "7枠", "winRate": 9.1, "tan": 93, "fuku": 84},
          {"bracket": "8枠", "winRate": 7.4, "tan": 86, "fuku": 75}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "13-9-9-120", "winRate": 8.6, "rentaiRate": 15.0, "placeRate": 21.0, "tan": 57},
          {"style": "先行", "results": "57-69-56-460", "winRate": 8.9, "rentaiRate": 20.0, "placeRate": 28.0, "tan": 66},
          {"style": "差し", "results": "53-42-52-587", "winRate": 7.2, "rentaiRate": 13.0, "placeRate": 20.0, "tan": 53},
          {"style": "追込", "results": "7-12-13-224", "winRate": 2.7, "rentaiRate": 7.4, "placeRate": 13.0, "tan": 23}
        ]
      },
      "2000m": {
        "features": "1コーナーまでの距離があり、枠順の有利不利は比較的少ないが、6枠の回収率が優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.9, "tan": 70, "fuku": 80},
          {"bracket": "2枠", "winRate": 7.9, "tan": 87, "fuku": 77},
          {"bracket": "3枠", "winRate": 5.8, "tan": 67, "fuku": 79},
          {"bracket": "4枠", "winRate": 7.6, "tan": 82, "fuku": 77},
          {"bracket": "5枠", "winRate": 6.9, "tan": 79, "fuku": 85},
          {"bracket": "6枠", "winRate": 8.4, "tan": 96, "fuku": 94},
          {"bracket": "7枠", "winRate": 6.8, "tan": 75, "fuku": 85},
          {"bracket": "8枠", "winRate": 6.5, "tan": 75, "fuku": 75}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "4-6-6-105", "winRate": 3.3, "rentaiRate": 8.3, "placeRate": 13.0, "tan": 32},
          {"style": "先行", "results": "70-68-75-648", "winRate": 8.1, "rentaiRate": 16.0, "placeRate": 25.0, "tan": 81},
          {"style": "差し", "results": "68-68-62-774", "winRate": 7.0, "rentaiRate": 14.0, "placeRate": 20.0, "tan": 61},
          {"style": "追込", "results": "21-21-22-378", "winRate": 4.8, "rentaiRate": 9.5, "placeRate": 14.0, "tan": 28}
        ]
      },
      "2200m": {
        "features": "外回りコース使用。スタートから1コーナーまで432mで、序盤は緩カーブ続きでペースが落ちにくい。持続力（スタミナ＋底力）が問われ、コース実績馬のリピート好走が多い。後方一気は厳しく、好位から持続的な脚を使える馬が狙い目。",
        "stats": [
          {"bracket": "1枠", "winRate": 10.7, "tan": 104, "fuku": 95},
          {"bracket": "2枠", "winRate": 6.9, "tan": 84, "fuku": 81},
          {"bracket": "3枠", "winRate": 6.5, "tan": 75, "fuku": 73},
          {"bracket": "4枠", "winRate": 7.6, "tan": 73, "fuku": 82},
          {"bracket": "5枠", "winRate": 7.3, "tan": 81, "fuku": 79},
          {"bracket": "6枠", "winRate": 3.8, "tan": 35, "fuku": 60},
          {"bracket": "7枠", "winRate": 8.0, "tan": 97, "fuku": 88},
          {"bracket": "8枠", "winRate": 6.5, "tan": 89, "fuku": 98}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "6-2-2-50", "winRate": 10.0, "rentaiRate": 13.0, "placeRate": 17.0, "tan": 65},
          {"style": "先行", "results": "30-26-29-234", "winRate": 9.4, "rentaiRate": 18.0, "placeRate": 27.0, "tan": 91},
          {"style": "差し", "results": "29-31-30-362", "winRate": 6.4, "rentaiRate": 13.0, "placeRate": 20.0, "tan": 73},
          {"style": "追込", "results": "7-13-11-210", "winRate": 2.9, "rentaiRate": 8.3, "placeRate": 13.0, "tan": 18}
        ]
      },
      "2500m": {
        "features": "有馬記念の舞台。コーナーを6回回るため、ロスのない内枠（特に5枠・6枠の勝率が高い）や立ち回りの上手さが重要。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.2, "tan": 59, "fuku": 70},
          {"bracket": "2枠", "winRate": 8.1, "tan": 82, "fuku": 101},
          {"bracket": "3枠", "winRate": 7.2, "tan": 77, "fuku": 81},
          {"bracket": "4枠", "winRate": 5.6, "tan": 44, "fuku": 76},
          {"bracket": "5枠", "winRate": 13.6, "tan": 123, "fuku": 118},
          {"bracket": "6枠", "winRate": 11.4, "tan": 110, "fuku": 94},
          {"bracket": "7枠", "winRate": 8.6, "tan": 68, "fuku": 62},
          {"bracket": "8枠", "winRate": 5.3, "tan": 72, "fuku": 76}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "4-4-2-31", "winRate": 9.8, "rentaiRate": 20.0, "placeRate": 24.0, "tan": 282},
          {"style": "先行", "results": "19-15-23-160", "winRate": 8.8, "rentaiRate": 16.0, "placeRate": 26.0, "tan": 79},
          {"style": "差し", "results": "22-20-16-188", "winRate": 8.9, "rentaiRate": 17.0, "placeRate": 24.0, "tan": 72},
          {"style": "追込", "results": "4-10-8-113", "winRate": 3.0, "rentaiRate": 10.0, "placeRate": 16.0, "tan": 45}
        ]
      }
    },
    "ダート": {
      "1200m": {
        "features": "芝スタートで外枠の芝部分が長い。「芝を長く走れる外枠」が有利な傾向。6枠の勝率・回収率が優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.6, "tan": 84, "fuku": 80},
          {"bracket": "2枠", "winRate": 5.0, "tan": 66, "fuku": 77},
          {"bracket": "3枠", "winRate": 4.6, "tan": 60, "fuku": 77},
          {"bracket": "4枠", "winRate": 6.2, "tan": 78, "fuku": 84},
          {"bracket": "5枠", "winRate": 6.8, "tan": 83, "fuku": 83},
          {"bracket": "6枠", "winRate": 8.3, "tan": 98, "fuku": 85},
          {"bracket": "7枠", "winRate": 7.1, "tan": 79, "fuku": 86},
          {"bracket": "8枠", "winRate": 7.7, "tan": 79, "fuku": 80}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "64-41-49-449", "winRate": 11.0, "rentaiRate": 17.0, "placeRate": 26.0, "tan": 98},
          {"style": "先行", "results": "277-248-234-2258", "winRate": 9.2, "rentaiRate": 17.0, "placeRate": 25.0, "tan": 79},
          {"style": "差し", "results": "112-141-160-2304", "winRate": 4.1, "rentaiRate": 9.3, "placeRate": 15.0, "tan": 37},
          {"style": "追込", "results": "34-58-44-1208", "winRate": 2.5, "rentaiRate": 6.8, "placeRate": 10.0, "tan": 44}
        ]
      },
      "1800m": {
        "features": "スタート直後に急坂があり、そもそもペースが速くならないことが多い。6～8枠＋前走4角5番手以内の馬は、単勝回収率100%超え（激アツ条件）。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.5, "tan": 69, "fuku": 71},
          {"bracket": "2枠", "winRate": 7.4, "tan": 96, "fuku": 87},
          {"bracket": "3枠", "winRate": 4.5, "tan": 58, "fuku": 71},
          {"bracket": "4枠", "winRate": 7.1, "tan": 82, "fuku": 84},
          {"bracket": "5枠", "winRate": 6.0, "tan": 68, "fuku": 83},
          {"bracket": "6枠", "winRate": 7.6, "tan": 82, "fuku": 83},
          {"bracket": "7枠", "winRate": 7.4, "tan": 79, "fuku": 85},
          {"bracket": "8枠", "winRate": 9.1, "tan": 91, "fuku": 88}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "49-37-34-347", "winRate": 10.0, "rentaiRate": 18.0, "placeRate": 26.0, "tan": 82},
          {"style": "先行", "results": "257-226-223-2006", "winRate": 9.5, "rentaiRate": 18.0, "placeRate": 26.0, "tan": 77},
          {"style": "差し", "results": "157-186-188-2515", "winRate": 5.2, "rentaiRate": 11.0, "placeRate": 17.0, "tan": 55},
          {"style": "追込", "results": "55-69-74-1390", "winRate": 3.5, "rentaiRate": 7.8, "placeRate": 12.0, "tan": 96}
        ]
      },
      "2400m": {
        "features": "1枠の勝率・単回収率が突出して高い（単回146）。内枠で脚を溜められる馬が狙い目。",
        "stats": [
          {"bracket": "1枠", "winRate": 10.4, "tan": 146, "fuku": 102},
          {"bracket": "2枠", "winRate": 1.4, "tan": 19, "fuku": 39},
          {"bracket": "3枠", "winRate": 5.4, "tan": 72, "fuku": 100},
          {"bracket": "4枠", "winRate": 1.3, "tan": 14, "fuku": 70},
          {"bracket": "5枠", "winRate": 8.6, "tan": 99, "fuku": 81},
          {"bracket": "6枠", "winRate": 5.8, "tan": 61, "fuku": 87},
          {"bracket": "7枠", "winRate": 10.2, "tan": 110, "fuku": 89},
          {"bracket": "8枠", "winRate": 12.4, "tan": 102, "fuku": 78}
        ]
      }
    }
  },

  // =================================================================
  // 🗼 東京競馬場 (Tokyo)
  // =================================================================
  "東京": {
    "芝": {
      "1400m": {
        "features": "初角までの距離が短くやや内前有利。ペースの上がる上級条件は外差しも届く。京王杯SCはペースが上がりやすく毎年差し有利。6枠の単回収率が優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.8, "tan": 63, "fuku": 69},
          {"bracket": "2枠", "winRate": 4.3, "tan": 64, "fuku": 74},
          {"bracket": "3枠", "winRate": 6.6, "tan": 80, "fuku": 73},
          {"bracket": "4枠", "winRate": 5.3, "tan": 60, "fuku": 79},
          {"bracket": "5枠", "winRate": 8.4, "tan": 87, "fuku": 84},
          {"bracket": "6枠", "winRate": 9.0, "tan": 102, "fuku": 85},
          {"bracket": "7枠", "winRate": 6.6, "tan": 84, "fuku": 83},
          {"bracket": "8枠", "winRate": 7.8, "tan": 92, "fuku": 95}
        ]
      },
      "1600m": {
        "features": "「スタミナ重要・距離短縮馬◎」。3コーナーの登り坂でペース緩む＋長い直線意識しスローになりがち。キレ武器の中距離馬や距離短縮組に注意。ただし、馬場コンディションによっては異常な差し有利になる場合もある。",
        "stats": [
          {"bracket": "1枠", "winRate": 10.1, "tan": 110, "fuku": 90},
          {"bracket": "2枠", "winRate": 5.8, "tan": 66, "fuku": 88},
          {"bracket": "3枠", "winRate": 5.9, "tan": 59, "fuku": 76},
          {"bracket": "4枠", "winRate": 6.8, "tan": 71, "fuku": 75},
          {"bracket": "5枠", "winRate": 7.2, "tan": 76, "fuku": 78},
          {"bracket": "6枠", "winRate": 6.5, "tan": 72, "fuku": 90},
          {"bracket": "7枠", "winRate": 9.2, "tan": 105, "fuku": 87},
          {"bracket": "8枠", "winRate": 7.2, "tan": 80, "fuku": 87}
        ]
      },
      "1800m": {
        "features": "紛れが少なく能力が何より重要。早い上がりで結果を出しているかがカギ。馬場の見極めが重要になる。データ上は4枠が勝率11.1%、単回110と非常に優秀なホットスポット。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.7, "tan": 56, "fuku": 85},
          {"bracket": "2枠", "winRate": 8.2, "tan": 79, "fuku": 80},
          {"bracket": "3枠", "winRate": 7.4, "tan": 84, "fuku": 84},
          {"bracket": "4枠", "winRate": 11.1, "tan": 110, "fuku": 90},
          {"bracket": "5枠", "winRate": 7.2, "tan": 66, "fuku": 86},
          {"bracket": "6枠", "winRate": 6.8, "tan": 70, "fuku": 77},
          {"bracket": "7枠", "winRate": 8.1, "tan": 76, "fuku": 87},
          {"bracket": "8枠", "winRate": 7.7, "tan": 89, "fuku": 84}
        ]
      },
      "2000m": {
        "features": "天皇賞(秋)の舞台。1枠の勝率が高く、3枠の単回収率も優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 11.2, "tan": 88, "fuku": 81},
          {"bracket": "2枠", "winRate": 7.8, "tan": 71, "fuku": 86},
          {"bracket": "3枠", "winRate": 9.4, "tan": 98, "fuku": 82},
          {"bracket": "4枠", "winRate": 8.5, "tan": 78, "fuku": 76},
          {"bracket": "5枠", "winRate": 8.9, "tan": 71, "fuku": 96},
          {"bracket": "6枠", "winRate": 7.7, "tan": 73, "fuku": 79},
          {"bracket": "7枠", "winRate": 7.8, "tan": 81, "fuku": 78},
          {"bracket": "8枠", "winRate": 8.4, "tan": 74, "fuku": 84}
        ]
      },
      "2400m": {
        "features": "ダービー・ジャパンCの舞台。紛れが少なく能力が何より重要。内有利馬場の時は極端に内枠有利になるためダービーなどは特に要注意。データ上は6枠の成績が安定。",
        "stats": [
          {"bracket": "1枠", "winRate": 10.8, "tan": 85, "fuku": 83},
          {"bracket": "2枠", "winRate": 4.2, "tan": 51, "fuku": 67},
          {"bracket": "3枠", "winRate": 8.5, "tan": 84, "fuku": 88},
          {"bracket": "4枠", "winRate": 7.3, "tan": 75, "fuku": 90},
          {"bracket": "5枠", "winRate": 9.0, "tan": 86, "fuku": 82},
          {"bracket": "6枠", "winRate": 10.3, "tan": 97, "fuku": 84},
          {"bracket": "7枠", "winRate": 7.1, "tan": 68, "fuku": 79},
          {"bracket": "8枠", "winRate": 8.3, "tan": 74, "fuku": 88}
        ]
      }
    },
    "ダート": {
      "1300m": {
        "features": "1枠の単回収率94とまずまず。短距離戦。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.0, "tan": 94, "fuku": 89},
          {"bracket": "2枠", "winRate": 7.4, "tan": 79, "fuku": 89},
          {"bracket": "3枠", "winRate": 6.8, "tan": 85, "fuku": 70},
          {"bracket": "4枠", "winRate": 5.3, "tan": 70, "fuku": 60},
          {"bracket": "5枠", "winRate": 5.7, "tan": 75, "fuku": 89},
          {"bracket": "6枠", "winRate": 7.4, "tan": 83, "fuku": 93},
          {"bracket": "7枠", "winRate": 4.8, "tan": 62, "fuku": 85},
          {"bracket": "8枠", "winRate": 7.4, "tan": 87, "fuku": 80}
        ]
      },
      "1400m": {
        "features": "直線が長く末脚が活きると思われがちだが、差し有利は根岸Sなど一部のレースだけで実は先行有利。上がり3Fの速さが勝敗の鍵。ペースが激しく流れれば差し馬の台頭も。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.2, "tan": 89, "fuku": 80},
          {"bracket": "2枠", "winRate": 6.3, "tan": 85, "fuku": 87},
          {"bracket": "3枠", "winRate": 5.7, "tan": 77, "fuku": 77},
          {"bracket": "4枠", "winRate": 7.3, "tan": 84, "fuku": 82},
          {"bracket": "5枠", "winRate": 5.4, "tan": 66, "fuku": 77},
          {"bracket": "6枠", "winRate": 6.8, "tan": 79, "fuku": 82},
          {"bracket": "7枠", "winRate": 7.8, "tan": 82, "fuku": 84},
          {"bracket": "8枠", "winRate": 6.1, "tan": 70, "fuku": 79}
        ]
      },
      "1600m": {
        "features": "距離と枠がポイントになりやすいコース。芝スタート部分をロスなく走れる外枠（7・8枠）が優秀。スピードだけで押し切るのは難しく、「マイルは少し短いかも」というタイプの馬がスタミナを活かしやすい。上級条件になると差し有利になる。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.0, "tan": 69, "fuku": 76},
          {"bracket": "2枠", "winRate": 6.3, "tan": 79, "fuku": 76},
          {"bracket": "3枠", "winRate": 6.1, "tan": 81, "fuku": 77},
          {"bracket": "4枠", "winRate": 5.3, "tan": 69, "fuku": 75},
          {"bracket": "5枠", "winRate": 7.2, "tan": 77, "fuku": 84},
          {"bracket": "6枠", "winRate": 7.7, "tan": 80, "fuku": 85},
          {"bracket": "7枠", "winRate": 7.7, "tan": 88, "fuku": 84},
          {"bracket": "8枠", "winRate": 8.4, "tan": 86, "fuku": 93}
        ]
      },
      "2100m": {
        "features": "良馬場ならとにかく末脚が重要。道悪だと前が止まらない傾向にある。データ上は3枠の勝率が9.1%と高く、回収率も優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.7, "tan": 79, "fuku": 77},
          {"bracket": "2枠", "winRate": 5.8, "tan": 73, "fuku": 83},
          {"bracket": "3枠", "winRate": 9.1, "tan": 95, "fuku": 92},
          {"bracket": "4枠", "winRate": 6.1, "tan": 70, "fuku": 85},
          {"bracket": "5枠", "winRate": 7.6, "tan": 84, "fuku": 76},
          {"bracket": "6枠", "winRate": 7.9, "tan": 86, "fuku": 88},
          {"bracket": "7枠", "winRate": 5.9, "tan": 65, "fuku": 69},
          {"bracket": "8枠", "winRate": 6.4, "tan": 88, "fuku": 86}
        ]
      }
    }
  },

  // =================================================================
  // ⛩️ 京都競馬場 (Kyoto)
  // =================================================================
  "京都": {
    "芝": {
      "1200m": {
        "features": "「内前・先行断然有利」。最初のコーナーまでの距離が短い＋3角が上り坂＋直線平坦。ペースが上がりにくく、内前有利が顕著。【激アツ条件】1・2枠の前走4角3番手以内（単回収率191%！）。【脚質傾向】基本は逃げ・先行の勝率が高いが、差し馬の単勝回収率が128%と高く穴で狙い目。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.6, "tan": 59, "fuku": 77},
          {"bracket": "2枠", "winRate": 8.4, "tan": 110, "fuku": 103},
          {"bracket": "3枠", "winRate": 6.2, "tan": 60, "fuku": 70},
          {"bracket": "4枠", "winRate": 6.5, "tan": 99, "fuku": 75},
          {"bracket": "5枠", "winRate": 5.5, "tan": 64, "fuku": 86},
          {"bracket": "6枠", "winRate": 7.6, "tan": 81, "fuku": 67},
          {"bracket": "7枠", "winRate": 8.8, "tan": 99, "fuku": 100},
          {"bracket": "8枠", "winRate": 5.6, "tan": 70, "fuku": 72}
        ],　// ← ここにカンマを忘れずに！
        "styles": [
          {"style": "逃げ", "results": "22-14-13-130", "winRate": 12.0, "rentaiRate": 20.0, "placeRate": 27.0, "tan": 90},
          {"style": "先行", "results": "52-51-56-534", "winRate": 7.5, "rentaiRate": 15.0, "placeRate": 23.0, "tan": 75},
          {"style": "差し", "results": "31-32-31-488", "winRate": 5.3, "rentaiRate": 11.0, "placeRate": 16.0, "tan": 128},
          {"style": "追込", "results": "5-13-13-204", "winRate": 2.1, "rentaiRate": 7.7, "placeRate": 13.0, "tan": 15}
        ]
      },
      "1400m内": {
        "features": "内回り。「差し有利の舞台」。芝1200mよりスタートが200m後ろになり、差し馬＆距離短縮組が有利になりやすい。1枠の単回収率150%は驚異的。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.8, "tan": 150, "fuku": 106},
          {"bracket": "2枠", "winRate": 3.4, "tan": 50, "fuku": 87},
          {"bracket": "3枠", "winRate": 13.3, "tan": 99, "fuku": 98},
          {"bracket": "4枠", "winRate": 1.6, "tan": 17, "fuku": 71},
          {"bracket": "5枠", "winRate": 7.4, "tan": 109, "fuku": 96},
          {"bracket": "6枠", "winRate": 4.3, "tan": 60, "fuku": 60},
          {"bracket": "7枠", "winRate": 11.6, "tan": 126, "fuku": 65},
          {"bracket": "8枠", "winRate": 2.2, "tan": 34, "fuku": 64}
        ]
      },
      "1400m外": {
        "features": "外回り。「追走力必要なく距離短縮有利」。3コーナーの上り坂でペース緩む＋長い直線意識しスローになる。上がり最速を使える瞬発力型が強い舞台。外枠（8枠）の回収率が良い。【脚質傾向】逃げ（単回133%）と差し（単回107%）の回収率が優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.2, "tan": 63, "fuku": 83},
          {"bracket": "2枠", "winRate": 5.9, "tan": 55, "fuku": 52},
          {"bracket": "3枠", "winRate": 6.5, "tan": 67, "fuku": 94},
          {"bracket": "4枠", "winRate": 9.6, "tan": 105, "fuku": 72},
          {"bracket": "5枠", "winRate": 5.9, "tan": 70, "fuku": 72},
          {"bracket": "6枠", "winRate": 7.2, "tan": 67, "fuku": 86},
          {"bracket": "7枠", "winRate": 9.2, "tan": 106, "fuku": 103},
          {"bracket": "8枠", "winRate": 7.8, "tan": 89, "fuku": 71}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "7-6-6-64", "winRate": 8.4, "rentaiRate": 16.0, "placeRate": 23.0, "tan": 133},
          {"style": "先行", "results": "28-36-32-346", "winRate": 6.3, "rentaiRate": 14.0, "placeRate": 22.0, "tan": 63},
          {"style": "差し", "results": "42-37-34-372", "winRate": 8.7, "rentaiRate": 16.0, "placeRate": 23.0, "tan": 107},
          {"style": "追込", "results": "8-6-13-182", "winRate": 3.8, "rentaiRate": 6.7, "placeRate": 13.0, "tan": 28}
        ]
      },
      "1600m内": {
        "features": "4枠の勝率・回収率が高い（勝率9.9%、単回107）。【脚質傾向】逃げ馬の単勝回収率が115%とトップで、単騎逃げには警戒が必要。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.6, "tan": 57, "fuku": 67},
          {"bracket": "2枠", "winRate": 4.6, "tan": 58, "fuku": 64},
          {"bracket": "3枠", "winRate": 6.2, "tan": 73, "fuku": 86},
          {"bracket": "4枠", "winRate": 9.9, "tan": 107, "fuku": 95},
          {"bracket": "5枠", "winRate": 5.7, "tan": 66, "fuku": 70},
          {"bracket": "6枠", "winRate": 9.8, "tan": 90, "fuku": 76},
          {"bracket": "7枠", "winRate": 8.2, "tan": 80, "fuku": 79},
          {"bracket": "8枠", "winRate": 7.5, "tan": 88, "fuku": 112}
        ]
      },
      "1600m外": {
        "features": "「距離短縮＆差し馬が狙い目」。8枠の勝率11.4%、単回収率117と大外が有利。上がり最速馬の成績が圧倒的（複勝率約60%）。【脚質傾向】逃げ馬の単勝回収率が115%とトップで、単騎逃げには警戒が必要。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.6, "tan": 89, "fuku": 92},
          {"bracket": "2枠", "winRate": 5.2, "tan": 47, "fuku": 71},
          {"bracket": "3枠", "winRate": 1.0, "tan": 13, "fuku": 70},
          {"bracket": "4枠", "winRate": 10.3, "tan": 89, "fuku": 85},
          {"bracket": "5枠", "winRate": 7.8, "tan": 74, "fuku": 68},
          {"bracket": "6枠", "winRate": 7.4, "tan": 87, "fuku": 77},
          {"bracket": "7枠", "winRate": 8.7, "tan": 85, "fuku": 75},
          {"bracket": "8枠", "winRate": 11.4, "tan": 117, "fuku": 104}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "10-8-9-92", "winRate": 8.4, "rentaiRate": 15.0, "placeRate": 23.0, "tan": 115},
          {"style": "先行", "results": "49-37-44-422", "winRate": 8.9, "rentaiRate": 16.0, "placeRate": 24.0, "tan": 93},
          {"style": "差し", "results": "45-63-49-506", "winRate": 6.8, "rentaiRate": 16.0, "placeRate": 24.0, "tan": 75},
          {"style": "追込", "results": "13-9-16-267", "winRate": 4.3, "rentaiRate": 7.2, "placeRate": 12.0, "tan": 49}
        ]
      },
      "1800m": {
        "features": "5枠・6枠の勝率が高く、単回収率も100超え。【脚質傾向】先行馬の成績が圧倒的で、単勝回収率118%と非常に優秀。前目につけられる馬から入りたい。",
        "stats": [
          {"bracket": "1枠", "winRate": 4.7, "tan": 42, "fuku": 75},
          {"bracket": "2枠", "winRate": 9.8, "tan": 91, "fuku": 97},
          {"bracket": "3枠", "winRate": 7.4, "tan": 63, "fuku": 80},
          {"bracket": "4枠", "winRate": 7.7, "tan": 66, "fuku": 78},
          {"bracket": "5枠", "winRate": 13.4, "tan": 102, "fuku": 93},
          {"bracket": "6枠", "winRate": 9.9, "tan": 104, "fuku": 77},
          {"bracket": "7枠", "winRate": 7.3, "tan": 74, "fuku": 70},
          {"bracket": "8枠", "winRate": 8.6, "tan": 81, "fuku": 93}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "11-11-6-100", "winRate": 8.6, "rentaiRate": 17.0, "placeRate": 22.0, "tan": 30},
          {"style": "先行", "results": "61-59-48-496", "winRate": 9.2, "rentaiRate": 18.0, "placeRate": 25.0, "tan": 118},
          {"style": "差し", "results": "54-59-66-671", "winRate": 6.4, "rentaiRate": 13.0, "placeRate": 21.0, "tan": 32},
          {"style": "追込", "results": "27-22-32-344", "winRate": 6.4, "rentaiRate": 12.0, "placeRate": 19.0, "tan": 52}
        ]
      },
      "2000m": {
        "features": "「基本は内前も、秋華賞は差し有利」。初角までの距離短く、ペースが上がりにくいので基本は内前有利。4枠が勝率13.7%、単回122と優秀。【脚質傾向】回収率ベースでは追込（単回99%）がやや健闘しているが、全体的にフラット。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.7, "tan": 69, "fuku": 82},
          {"bracket": "2枠", "winRate": 8.7, "tan": 74, "fuku": 76},
          {"bracket": "3枠", "winRate": 8.2, "tan": 56, "fuku": 81},
          {"bracket": "4枠", "winRate": 13.7, "tan": 122, "fuku": 90},
          {"bracket": "5枠", "winRate": 8.2, "tan": 77, "fuku": 85},
          {"bracket": "6枠", "winRate": 6.2, "tan": 61, "fuku": 69},
          {"bracket": "7枠", "winRate": 11.2, "tan": 106, "fuku": 97},
          {"bracket": "8枠", "winRate": 7.7, "tan": 68, "fuku": 80}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "15-12-7-92", "winRate": 12.0, "rentaiRate": 21.0, "placeRate": 27.0, "tan": 72},
          {"style": "先行", "results": "54-57-60-410", "winRate": 9.3, "rentaiRate": 19.0, "placeRate": 29.0, "tan": 65},
          {"style": "差し", "results": "62-60-64-591", "winRate": 8.0, "rentaiRate": 16.0, "placeRate": 24.0, "tan": 82},
          {"style": "追込", "results": "15-17-15-304", "winRate": 4.3, "rentaiRate": 9.1, "placeRate": 13.0, "tan": 99}
        ]
      },
      "2200m": {
        "features": "「タフなコースで距離短縮組有利」。長い距離＋3・4角の下りから早めスパートでスタミナの要求値上がる。8枠の回収率が高い。【脚質傾向】先行馬が単勝回収率177%と超激アツ！好位から長くいい脚を使える馬を狙え。",
        "stats": [
          {"bracket": "1枠", "winRate": 10.9, "tan": 85, "fuku": 98},
          {"bracket": "2枠", "winRate": 8.3, "tan": 75, "fuku": 75},
          {"bracket": "3枠", "winRate": 11.5, "tan": 118, "fuku": 107},
          {"bracket": "4枠", "winRate": 4.7, "tan": 37, "fuku": 65},
          {"bracket": "5枠", "winRate": 6.8, "tan": 61, "fuku": 78},
          {"bracket": "6枠", "winRate": 6.6, "tan": 72, "fuku": 81},
          {"bracket": "7枠", "winRate": 7.2, "tan": 68, "fuku": 61},
          {"bracket": "8枠", "winRate": 11.6, "tan": 126, "fuku": 84}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "2-3-2-50", "winRate": 3.5, "rentaiRate": 8.8, "placeRate": 12.0, "tan": 16},
          {"style": "先行", "results": "31-35-19-203", "winRate": 11.0, "rentaiRate": 23.0, "placeRate": 30.0, "tan": 177},
          {"style": "差し", "results": "37-27-32-340", "winRate": 8.5, "rentaiRate": 15.0, "placeRate": 22.0, "tan": 97},
          {"style": "追込", "results": "5-10-22-180", "winRate": 2.3, "rentaiRate": 6.9, "placeRate": 17.0, "tan": 16}
        ]
      },
      "2400m": {
        "features": "「能力のある馬を信頼すべき」。スロー→瞬発力勝負になりやすく、紛れが少ない。4枠の勝率・回収率が優秀。【脚質傾向】先行（単回111%）と差し（単回100%）の成績が安定している。",
        "stats": [
          {"bracket": "1枠", "winRate": 10.6, "tan": 112, "fuku": 70},
          {"bracket": "2枠", "winRate": 8.2, "tan": 51, "fuku": 92},
          {"bracket": "3枠", "winRate": 7.3, "tan": 73, "fuku": 74},
          {"bracket": "4枠", "winRate": 13.8, "tan": 110, "fuku": 103},
          {"bracket": "5枠", "winRate": 9.5, "tan": 88, "fuku": 91},
          {"bracket": "6枠", "winRate": 3.0, "tan": 34, "fuku": 55},
          {"bracket": "7枠", "winRate": 9.7, "tan": 93, "fuku": 90},
          {"bracket": "8枠", "winRate": 6.8, "tan": 70, "fuku": 77}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "6-4-6-32", "winRate": 13.0, "rentaiRate": 21.0, "placeRate": 33.0, "tan": 64},
          {"style": "先行", "results": "31-33-22-196", "winRate": 11.0, "rentaiRate": 23.0, "placeRate": 30.0, "tan": 111},
          {"style": "差し", "results": "33-25-38-266", "winRate": 9.1, "rentaiRate": 16.0, "placeRate": 27.0, "tan": 100},
          {"style": "追込", "results": "9-17-13-154", "winRate": 4.7, "rentaiRate": 13.0, "placeRate": 20.0, "tan": 35}
        ]
      },
      "3000m": {
        "features": "「中距離馬でも好走可能な長距離戦」。スタート後の3角の上り坂でペース緩む＆直線平坦。スタミナ要求値は意外と低く、コーナーを6回通過するので基本は内枠有利。",
        "stats": [] 
      }
    },
    "ダート": {
      "1200m": {
        "features": "「日本屈指の逃げ・先行有利コース」。スタート後の3角の上り坂でペース緩む＋下り坂＋直線平坦。7枠の勝率・回収率が優秀。【脚質傾向】やはり先行馬の勝率（8.8%）・回収率（単回86%）が最も高く、前に行ける馬が中心。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.7, "tan": 75, "fuku": 74},
          {"bracket": "2枠", "winRate": 4.0, "tan": 47, "fuku": 84},
          {"bracket": "3枠", "winRate": 7.2, "tan": 96, "fuku": 70},
          {"bracket": "4枠", "winRate": 4.3, "tan": 61, "fuku": 73},
          {"bracket": "5枠", "winRate": 3.8, "tan": 45, "fuku": 65},
          {"bracket": "6枠", "winRate": 7.8, "tan": 89, "fuku": 87},
          {"bracket": "7枠", "winRate": 11.1, "tan": 121, "fuku": 96},
          {"bracket": "8枠", "winRate": 9.0, "tan": 91, "fuku": 99}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "30-28-36-314", "winRate": 7.4, "rentaiRate": 14.0, "placeRate": 23.0, "tan": 40},
          {"style": "先行", "results": "167-149-134-1457", "winRate": 8.8, "rentaiRate": 17.0, "placeRate": 24.0, "tan": 86},
          {"style": "差し", "results": "68-86-84-1211", "winRate": 4.7, "rentaiRate": 11.0, "placeRate": 16.0, "tan": 75},
          {"style": "追込", "results": "24-26-35-587", "winRate": 3.6, "rentaiRate": 7.4, "placeRate": 13.0, "tan": 62}
        ]
      },
      "1400m": {
        "features": "「芝スタートで外枠有利」。芝部分を長く走れる外枠が有利。5枠の回収率が比較的良い。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.6, "tan": 81, "fuku": 89},
          {"bracket": "2枠", "winRate": 6.2, "tan": 75, "fuku": 83},
          {"bracket": "3枠", "winRate": 5.3, "tan": 70, "fuku": 73},
          {"bracket": "4枠", "winRate": 7.2, "tan": 77, "fuku": 88},
          {"bracket": "5枠", "winRate": 8.2, "tan": 88, "fuku": 78},
          {"bracket": "6枠", "winRate": 6.0, "tan": 67, "fuku": 76},
          {"bracket": "7枠", "winRate": 8.2, "tan": 89, "fuku": 80},
          {"bracket": "8枠", "winRate": 7.4, "tan": 79, "fuku": 87}
        ]
      },
      "1800m": {
        "features": "「ダートでは珍しい内枠有利コース」。初角までが短い＋1,2角が急カーブ。外枠がポジション取れず内枠有利になりやすい。6枠の単回収率101も優秀。【脚質傾向】差し馬の単勝回収率が109%と高く、展開次第でズバッと決まる。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.1, "tan": 63, "fuku": 75},
          {"bracket": "2枠", "winRate": 7.3, "tan": 72, "fuku": 86},
          {"bracket": "3枠", "winRate": 6.1, "tan": 66, "fuku": 83},
          {"bracket": "4枠", "winRate": 7.0, "tan": 82, "fuku": 84},
          {"bracket": "5枠", "winRate": 9.0, "tan": 84, "fuku": 78},
          {"bracket": "6枠", "winRate": 9.6, "tan": 101, "fuku": 84},
          {"bracket": "7枠", "winRate": 6.9, "tan": 76, "fuku": 82},
          {"bracket": "8枠", "winRate": 9.1, "tan": 81, "fuku": 79}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "40-38-31-322", "winRate": 9.3, "rentaiRate": 18.0, "placeRate": 25.0, "tan": 61},
          {"style": "先行", "results": "208-196-176-1529", "winRate": 9.9, "rentaiRate": 19.0, "placeRate": 28.0, "tan": 83},
          {"style": "差し", "results": "150-170-173-1916", "winRate": 6.2, "rentaiRate": 13.0, "placeRate": 20.0, "tan": 109},
          {"style": "追込", "results": "57-49-76-1130", "winRate": 4.3, "rentaiRate": 8.1, "placeRate": 14.0, "tan": 71}
        ]
      },
      "1900m": {
        "features": "「内枠の差し馬を狙え」。1枠は単複共に100%超えと成績抜群。初角までの距離伸びてペースUP→差し有利。【脚質傾向】逃げ（単回147%）、先行（単回125%）など、前に行く馬の回収率が非常に高く強力。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.4, "tan": 115, "fuku": 113},
          {"bracket": "2枠", "winRate": 10.1, "tan": 105, "fuku": 82},
          {"bracket": "3枠", "winRate": 4.3, "tan": 46, "fuku": 77},
          {"bracket": "4枠", "winRate": 8.3, "tan": 85, "fuku": 80},
          {"bracket": "5枠", "winRate": 8.2, "tan": 82, "fuku": 80},
          {"bracket": "6枠", "winRate": 7.0, "tan": 95, "fuku": 89},
          {"bracket": "7枠", "winRate": 8.8, "tan": 93, "fuku": 73},
          {"bracket": "8枠", "winRate": 5.9, "tan": 70, "fuku": 80}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "7-3-6-63", "winRate": 8.9, "rentaiRate": 13.0, "placeRate": 20.0, "tan": 147},
          {"style": "先行", "results": "56-48-43-305", "winRate": 12.0, "rentaiRate": 23.0, "placeRate": 33.0, "tan": 125},
          {"style": "差し", "results": "28-38-39-418", "winRate": 5.4, "rentaiRate": 13.0, "placeRate": 20.0, "tan": 104},
          {"style": "追込", "results": "11-13-15-240", "winRate": 3.9, "rentaiRate": 8.6, "placeRate": 14.0, "tan": 122}
        ]
      }
    }
  },

  // =================================================================
  // 🐯 阪神競馬場 (Hanshin)
  // =================================================================
  "阪神": {
    "芝": {
      "1200m": {
        "features": "とにかく内枠断然有利。最初のコーナーまで短く外枠は位置が取れない。過去5年間で1〜3枠の単勝回収率149%、複勝回収率102%と激アツ。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.0, "tan": 62, "fuku": 72},
          {"bracket": "2枠", "winRate": 10.7, "tan": 97, "fuku": 82},
          {"bracket": "3枠", "winRate": 10.9, "tan": 100, "fuku": 106},
          {"bracket": "4枠", "winRate": 6.9, "tan": 74, "fuku": 83},
          {"bracket": "5枠", "winRate": 6.7, "tan": 65, "fuku": 85},
          {"bracket": "6枠", "winRate": 6.2, "tan": 80, "fuku": 79},
          {"bracket": "7枠", "winRate": 9.5, "tan": 92, "fuku": 87},
          {"bracket": "8枠", "winRate": 5.2, "tan": 64, "fuku": 43}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "8-9-7-83", "winRate": 7.5, "rentaiRate": 16.0, "placeRate": 22.0, "tan": 26},
          {"style": "先行", "results": "47-36-45-328", "winRate": 10.0, "rentaiRate": 18.0, "placeRate": 28.0, "tan": 85},
          {"style": "差し", "results": "18-24-19-313", "winRate": 4.8, "rentaiRate": 11.0, "placeRate": 16.0, "tan": 43},
          {"style": "追込", "results": "4-8-7-155", "winRate": 2.3, "rentaiRate": 6.9, "placeRate": 11.0, "tan": 16}
        ]
      },
      "1400m": {
        "features": "前走1200m組が多い時の『距離短縮馬』狙いが激アツ。最初のコーナーまで距離が長く、ペースUPしてタフな競馬になりやすい。6枠の単勝回収率105も光る。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.4, "tan": 55, "fuku": 91},
          {"bracket": "2枠", "winRate": 9.5, "tan": 101, "fuku": 94},
          {"bracket": "3枠", "winRate": 10.6, "tan": 101, "fuku": 83},
          {"bracket": "4枠", "winRate": 7.2, "tan": 76, "fuku": 77},
          {"bracket": "5枠", "winRate": 7.1, "tan": 78, "fuku": 81},
          {"bracket": "6枠", "winRate": 8.8, "tan": 105, "fuku": 86},
          {"bracket": "7枠", "winRate": 6.1, "tan": 71, "fuku": 74},
          {"bracket": "8枠", "winRate": 3.9, "tan": 48, "fuku": 64}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "10-12-13-135", "winRate": 5.9, "rentaiRate": 13.0, "placeRate": 21.0, "tan": 58},
          {"style": "先行", "results": "67-51-58-587", "winRate": 8.8, "rentaiRate": 15.0, "placeRate": 23.0, "tan": 66},
          {"style": "差し", "results": "44-52-46-645", "winRate": 5.6, "rentaiRate": 12.0, "placeRate": 18.0, "tan": 54},
          {"style": "追込", "results": "9-16-13-299", "winRate": 2.7, "rentaiRate": 7.4, "placeRate": 11.0, "tan": 29}
        ]
      },
      "1600m": {
        "features": "外回りコース。近年の高速馬場化により、かつて程『外差し』が決まらなくなっている傾向。近年の桜花賞でも内をロスなく立ち回った馬の好走が多数。4枠の単勝回収率101と安定。",
        "stats": [
          {"bracket": "1枠", "winRate": 4.5, "tan": 51, "fuku": 98},
          {"bracket": "2枠", "winRate": 9.4, "tan": 94, "fuku": 90},
          {"bracket": "3枠", "winRate": 8.3, "tan": 83, "fuku": 82},
          {"bracket": "4枠", "winRate": 9.4, "tan": 101, "fuku": 80},
          {"bracket": "5枠", "winRate": 8.7, "tan": 97, "fuku": 81},
          {"bracket": "6枠", "winRate": 6.8, "tan": 78, "fuku": 86},
          {"bracket": "7枠", "winRate": 6.2, "tan": 66, "fuku": 80},
          {"bracket": "8枠", "winRate": 6.5, "tan": 68, "fuku": 65}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "10-7-9-119", "winRate": 6.9, "rentaiRate": 12.0, "placeRate": 18.0, "tan": 92},
          {"style": "先行", "results": "61-60-61-580", "winRate": 8.0, "rentaiRate": 16.0, "placeRate": 24.0, "tan": 85},
          {"style": "差し", "results": "64-65-63-807", "winRate": 6.4, "rentaiRate": 13.0, "placeRate": 19.0, "tan": 75},
          {"style": "追込", "results": "20-23-23-353", "winRate": 4.8, "rentaiRate": 10.0, "placeRate": 16.0, "tan": 64}
        ]
      },
      "1800m": {
        "features": "外回りコース。1600m同様、近年の高速馬場化で外差しが決まりにくくなっている傾向に注意。データ上は6枠の単勝回収率100が優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.0, "tan": 62, "fuku": 85},
          {"bracket": "2枠", "winRate": 7.9, "tan": 79, "fuku": 77},
          {"bracket": "3枠", "winRate": 9.5, "tan": 84, "fuku": 89},
          {"bracket": "4枠", "winRate": 10.4, "tan": 83, "fuku": 81},
          {"bracket": "5枠", "winRate": 6.5, "tan": 61, "fuku": 76},
          {"bracket": "6枠", "winRate": 10.3, "tan": 100, "fuku": 91},
          {"bracket": "7枠", "winRate": 7.5, "tan": 78, "fuku": 76},
          {"bracket": "8枠", "winRate": 8.6, "tan": 87, "fuku": 83}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "5-15-6-105", "winRate": 3.8, "rentaiRate": 15.0, "placeRate": 20.0, "tan": 33},
          {"style": "先行", "results": "66-48-65-581", "winRate": 8.7, "rentaiRate": 15.0, "placeRate": 24.0, "tan": 89},
          {"style": "差し", "results": "72-80-79-772", "winRate": 7.2, "rentaiRate": 15.0, "placeRate": 23.0, "tan": 50},
          {"style": "追込", "results": "23-24-16-377", "winRate": 5.2, "rentaiRate": 11.0, "placeRate": 14.0, "tan": 128}
        ]
      },
      "2000m": {
        "features": "とにかく内前断然有利。最初のコーナーまで短く内枠有利でスローになりやすい。内回りで直線も短く先行馬有利。3角から早めのスパートがかかるため外を回る馬の負荷が大きい（4角5番手以内必須）。",
        "stats": [
          {"bracket": "1枠", "winRate": 12.4, "tan": 104, "fuku": 88},
          {"bracket": "2枠", "winRate": 8.0, "tan": 72, "fuku": 77},
          {"bracket": "3枠", "winRate": 6.7, "tan": 62, "fuku": 72},
          {"bracket": "4枠", "winRate": 9.2, "tan": 90, "fuku": 91},
          {"bracket": "5枠", "winRate": 7.7, "tan": 63, "fuku": 82},
          {"bracket": "6枠", "winRate": 7.8, "tan": 72, "fuku": 72},
          {"bracket": "7枠", "winRate": 7.5, "tan": 80, "fuku": 88},
          {"bracket": "8枠", "winRate": 11.6, "tan": 97, "fuku": 81}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "9-10-10-85", "winRate": 7.9, "rentaiRate": 17.0, "placeRate": 25.0, "tan": 62},
          {"style": "先行", "results": "51-46-34-374", "winRate": 10.0, "rentaiRate": 19.0, "placeRate": 26.0, "tan": 90},
          {"style": "差し", "results": "49-47-64-492", "winRate": 7.5, "rentaiRate": 15.0, "placeRate": 25.0, "tan": 101},
          {"style": "追込", "results": "17-24-17-260", "winRate": 5.3, "rentaiRate": 13.0, "placeRate": 18.0, "tan": 69}
        ]
      },
      "2200m": {
        "features": "東京でキレ負けするようなタフな馬を狙うコース。初角まで長くペースUPしタフな競馬に。内回りで各馬のスパートが早いため消耗戦になりやすくタフな差し馬の台頭が目立つ。1枠の勝率0%は衝撃的。",
        "stats": [
          {"bracket": "1枠", "winRate": 0.0, "tan": 0, "fuku": 78},
          {"bracket": "2枠", "winRate": 9.9, "tan": 87, "fuku": 89},
          {"bracket": "3枠", "winRate": 12.0, "tan": 90, "fuku": 90},
          {"bracket": "4枠", "winRate": 9.9, "tan": 86, "fuku": 75},
          {"bracket": "5枠", "winRate": 10.1, "tan": 97, "fuku": 60},
          {"bracket": "6枠", "winRate": 9.6, "tan": 92, "fuku": 69},
          {"bracket": "7枠", "winRate": 3.8, "tan": 49, "fuku": 91},
          {"bracket": "8枠", "winRate": 9.3, "tan": 108, "fuku": 81}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "8-7-5-24", "winRate": 18.0, "rentaiRate": 34.0, "placeRate": 45.0, "tan": 153},
          {"style": "先行", "results": "18-20-23-158", "winRate": 8.2, "rentaiRate": 17.0, "placeRate": 28.0, "tan": 71},
          {"style": "差し", "results": "21-23-22-230", "winRate": 7.1, "rentaiRate": 15.0, "placeRate": 22.0, "tan": 43},
          {"style": "追込", "results": "9-6-6-138", "winRate": 5.7, "rentaiRate": 9.4, "placeRate": 13.0, "tan": 66}
        ]
      },
      "2400m": {
        "features": "最初のコーナーまでの距離が短く、内枠有利＋スローになりやすい。1枠の勝率15.5%、単回収率126と圧倒的に強い。",
        "stats": [
          {"bracket": "1枠", "winRate": 15.5, "tan": 126, "fuku": 81},
          {"bracket": "2枠", "winRate": 12.6, "tan": 85, "fuku": 82},
          {"bracket": "3枠", "winRate": 12.1, "tan": 85, "fuku": 92},
          {"bracket": "4枠", "winRate": 9.4, "tan": 75, "fuku": 102},
          {"bracket": "5枠", "winRate": 2.8, "tan": 34, "fuku": 54},
          {"bracket": "6枠", "winRate": 9.0, "tan": 72, "fuku": 88},
          {"bracket": "7枠", "winRate": 8.9, "tan": 72, "fuku": 96},
          {"bracket": "8枠", "winRate": 8.9, "tan": 84, "fuku": 73}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "5-5-5-47", "winRate": 8.1, "rentaiRate": 16.0, "placeRate": 24.0, "tan": 120},
          {"style": "先行", "results": "29-28-25-192", "winRate": 11.0, "rentaiRate": 21.0, "placeRate": 30.0, "tan": 98},
          {"style": "差し", "results": "31-33-32-325", "winRate": 7.4, "rentaiRate": 15.0, "placeRate": 23.0, "tan": 76},
          {"style": "追込", "results": "11-10-15-174", "winRate": 5.2, "rentaiRate": 10.0, "placeRate": 17.0, "tan": 123}
        ]
   　 },
   　 "2600m": {
        "features": "最初のコーナーまでの距離が長い。タフさが問われて差し有利。過去5年間逃げ馬の勝利0、サンプルは少ないが上がり最速馬だと複勝率94.4%。",
        "stats": []
      },
      "3000m": {
        "features": "京都3000mとは真逆の『スタミナ必須のタフなコース』。スタート後に下り坂＋内回りで消耗戦になりやすく、純粋なスタミナが求められる。",
        "stats": []
      }
    },
    "ダート": {
      "1200m": {
        "features": "【良馬場は外枠断然有利】日本一外枠が有利な大箱コースで外回りのロスが小さい。直線の急坂で止まった先行馬が壁になるため内枠は不利。8枠の勝率が高く外枠有利。",
        "stats": [
          {"bracket": "1枠", "winRate": 4.3, "tan": 58, "fuku": 75},
          {"bracket": "2枠", "winRate": 6.1, "tan": 71, "fuku": 78},
          {"bracket": "3枠", "winRate": 6.9, "tan": 78, "fuku": 76},
          {"bracket": "4枠", "winRate": 7.5, "tan": 87, "fuku": 86},
          {"bracket": "5枠", "winRate": 5.9, "tan": 70, "fuku": 85},
          {"bracket": "6枠", "winRate": 6.8, "tan": 76, "fuku": 76},
          {"bracket": "7枠", "winRate": 7.1, "tan": 82, "fuku": 85},
          {"bracket": "8枠", "winRate": 9.5, "tan": 95, "fuku": 86}
        ]
      },
      "1400m": {
        "features": "【特に外枠有利】芝スタートで長く芝を走れる上、初角まで長く差し有利になりやすいため内の先行馬が止まりやすく内枠が不利。8枠の勝率9.4%、単回収率98と優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.1, "tan": 79, "fuku": 65},
          {"bracket": "2枠", "winRate": 5.7, "tan": 72, "fuku": 79},
          {"bracket": "3枠", "winRate": 6.1, "tan": 72, "fuku": 77},
          {"bracket": "4枠", "winRate": 8.0, "tan": 90, "fuku": 77},
          {"bracket": "5枠", "winRate": 6.1, "tan": 66, "fuku": 83},
          {"bracket": "6枠", "winRate": 6.4, "tan": 81, "fuku": 87},
          {"bracket": "7枠", "winRate": 6.1, "tan": 66, "fuku": 85},
          {"bracket": "8枠", "winRate": 9.4, "tan": 98, "fuku": 91}
        ]
      },
      "1800m": {
        "features": "【良馬場は外枠断然有利】日本一外枠有利な大箱で外回りのロスが小さい。直線の急坂で止まった先行馬が壁になるため内枠不利。データ上は5枠・6枠の中枠も好成績。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.3, "tan": 81, "fuku": 79},
          {"bracket": "2枠", "winRate": 6.3, "tan": 70, "fuku": 76},
          {"bracket": "3枠", "winRate": 7.2, "tan": 68, "fuku": 81},
          {"bracket": "4枠", "winRate": 9.0, "tan": 88, "fuku": 82},
          {"bracket": "5枠", "winRate": 8.9, "tan": 91, "fuku": 91},
          {"bracket": "6枠", "winRate": 8.6, "tan": 84, "fuku": 92},
          {"bracket": "7枠", "winRate": 7.8, "tan": 73, "fuku": 82},
          {"bracket": "8枠", "winRate": 8.2, "tan": 76, "fuku": 82}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "38-31-32-272", "winRate": 10.0, "rentaiRate": 18.0, "placeRate": 27.0, "tan": 60},
          {"style": "先行", "results": "217-208-198-1535", "winRate": 10.0, "rentaiRate": 20.0, "placeRate": 29.0, "tan": 84},
          {"style": "差し", "results": "147-159-166-2086", "winRate": 5.7, "rentaiRate": 12.0, "placeRate": 18.0, "tan": 75},
          {"style": "追込", "results": "49-53-56-1243", "winRate": 3.5, "rentaiRate": 7.3, "placeRate": 11.0, "tan": 70}
        ]
      },
      "2000m": {
        "features": "【特に外枠有利】芝スタートで長く芝を走れる上、初角まで長く差し有利になりやすいため内の先行馬が止まりやすく内枠が不利。データ上は6枠が勝率11.6%、単回118と突出して優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 9.7, "tan": 80, "fuku": 73},
          {"bracket": "2枠", "winRate": 8.5, "tan": 97, "fuku": 82},
          {"bracket": "3枠", "winRate": 5.6, "tan": 52, "fuku": 67},
          {"bracket": "4枠", "winRate": 6.8, "tan": 70, "fuku": 84},
          {"bracket": "5枠", "winRate": 5.0, "tan": 51, "fuku": 84},
          {"bracket": "6枠", "winRate": 11.6, "tan": 118, "fuku": 85},
          {"bracket": "7枠", "winRate": 7.6, "tan": 65, "fuku": 88},
          {"bracket": "8枠", "winRate": 9.5, "tan": 93, "fuku": 95}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "6-7-4-51", "winRate": 8.8, "rentaiRate": 19.0, "placeRate": 25.0, "tan": 57},
          {"style": "先行", "results": "35-35-26-211", "winRate": 11.0, "rentaiRate": 23.0, "placeRate": 31.0, "tan": 125},
          {"style": "差し", "results": "24-24-34-302", "winRate": 6.2, "rentaiRate": 13.0, "placeRate": 21.0, "tan": 129},
          {"style": "追込", "results": "7-6-8-174", "winRate": 3.6, "rentaiRate": 6.7, "placeRate": 11.0, "tan": 34}
        ]
      }
    }
  },

  // =================================================================
  // 🍤 中京競馬場 (Chukyo)
  // =================================================================
  "中京": {
    "芝": {
      "1200m": {
        "features": "2枠の勝率・単回収率が高い。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.4, "tan": 73, "fuku": 88},
          {"bracket": "2枠", "winRate": 8.2, "tan": 113, "fuku": 91},
          {"bracket": "3枠", "winRate": 8.5, "tan": 75, "fuku": 90},
          {"bracket": "4枠", "winRate": 8.2, "tan": 94, "fuku": 91},
          {"bracket": "5枠", "winRate": 6.1, "tan": 67, "fuku": 99},
          {"bracket": "6枠", "winRate": 5.5, "tan": 69, "fuku": 65},
          {"bracket": "7枠", "winRate": 8.1, "tan": 94, "fuku": 73},
          {"bracket": "8枠", "winRate": 4.2, "tan": 56, "fuku": 51}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "7-6-4-108", "winRate": 5.6, "rentaiRate": 10.0, "placeRate": 14.0, "tan": 59},
          {"style": "先行", "results": "49-35-39-540", "winRate": 7.4, "rentaiRate": 13.0, "placeRate": 19.0, "tan": 71},
          {"style": "差し", "results": "25-35-31-433", "winRate": 4.8, "rentaiRate": 11.0, "placeRate": 17.0, "tan": 110},
          {"style": "追込", "results": "8-13-15-190", "winRate": 3.5, "rentaiRate": 9.3, "placeRate": 16.0, "tan": 35}
        ]
      },
      "1400m": {
        "features": "3枠・4枠の勝率が高く安定している。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.1, "tan": 93, "fuku": 84},
          {"bracket": "2枠", "winRate": 4.7, "tan": 60, "fuku": 74},
          {"bracket": "3枠", "winRate": 9.3, "tan": 96, "fuku": 94},
          {"bracket": "4枠", "winRate": 9.5, "tan": 98, "fuku": 87},
          {"bracket": "5枠", "winRate": 6.4, "tan": 67, "fuku": 84},
          {"bracket": "6枠", "winRate": 7.2, "tan": 89, "fuku": 76},
          {"bracket": "7枠", "winRate": 6.8, "tan": 82, "fuku": 74},
          {"bracket": "8枠", "winRate": 3.8, "tan": 51, "fuku": 72}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "5-5-12-99", "winRate": 4.1, "rentaiRate": 8.3, "placeRate": 18.0, "tan": 29},
          {"style": "先行", "results": "47-43-48-601", "winRate": 6.4, "rentaiRate": 12.0, "placeRate": 19.0, "tan": 78},
          {"style": "差し", "results": "49-48-41-603", "winRate": 6.6, "rentaiRate": 13.0, "placeRate": 19.0, "tan": 104},
          {"style": "追込", "results": "12-17-12-330", "winRate": 3.2, "rentaiRate": 7.8, "placeRate": 11.0, "tan": 59}
        ]
      },
      "1600m": {
        "features": "1枠・2枠・4枠と内寄りが好成績。",
        "stats": [
          {"bracket": "1枠", "winRate": 9.3, "tan": 95, "fuku": 98},
          {"bracket": "2枠", "winRate": 9.3, "tan": 96, "fuku": 95},
          {"bracket": "3枠", "winRate": 6.8, "tan": 76, "fuku": 81},
          {"bracket": "4枠", "winRate": 5.7, "tan": 58, "fuku": 76},
          {"bracket": "5枠", "winRate": 8.7, "tan": 83, "fuku": 81},
          {"bracket": "6枠", "winRate": 7.1, "tan": 70, "fuku": 84},
          {"bracket": "7枠", "winRate": 7.9, "tan": 89, "fuku": 73},
          {"bracket": "8枠", "winRate": 6.7, "tan": 71, "fuku": 71}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "7-2-2-61", "winRate": 9.7, "rentaiRate": 13.0, "placeRate": 15.0, "tan": 66},
          {"style": "先行", "results": "41-48-37-390", "winRate": 7.9, "rentaiRate": 17.0, "placeRate": 24.0, "tan": 55},
          {"style": "差し", "results": "43-34-46-486", "winRate": 7.1, "rentaiRate": 13.0, "placeRate": 20.0, "tan": 91},
          {"style": "追込", "results": "9-16-16-279", "winRate": 2.8, "rentaiRate": 7.8, "placeRate": 13.0, "tan": 21}
        ]
      },
      "2000m": {
        "features": "2枠の勝率・回収率が安定。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.0, "tan": 87, "fuku": 78},
          {"bracket": "2枠", "winRate": 8.9, "tan": 92, "fuku": 86},
          {"bracket": "3枠", "winRate": 5.9, "tan": 62, "fuku": 71},
          {"bracket": "4枠", "winRate": 6.2, "tan": 69, "fuku": 79},
          {"bracket": "5枠", "winRate": 7.3, "tan": 80, "fuku": 91},
          {"bracket": "6枠", "winRate": 5.9, "tan": 70, "fuku": 75},
          {"bracket": "7枠", "winRate": 6.0, "tan": 78, "fuku": 84},
          {"bracket": "8枠", "winRate": 8.0, "tan": 89, "fuku": 79}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "9-7-6-85", "winRate": 8.4, "rentaiRate": 15.0, "placeRate": 21.0, "tan": 62},
          {"style": "先行", "results": "70-55-52-536", "winRate": 9.8, "rentaiRate": 18.0, "placeRate": 25.0, "tan": 81},
          {"style": "差し", "results": "51-66-68-839", "winRate": 5.0, "rentaiRate": 11.0, "placeRate": 18.0, "tan": 65},
          {"style": "追込", "results": "23-25-29-453", "winRate": 4.3, "rentaiRate": 9.1, "placeRate": 15.0, "tan": 42}
        ]
      },
      "2200m": {
        "features": "「差し有利になりやすい」。5枠の勝率13.2%、単回収率121と非常に優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.2, "tan": 63, "fuku": 84},
          {"bracket": "2枠", "winRate": 12.0, "tan": 106, "fuku": 91},
          {"bracket": "3枠", "winRate": 7.1, "tan": 67, "fuku": 67},
          {"bracket": "4枠", "winRate": 10.9, "tan": 84, "fuku": 89},
          {"bracket": "5枠", "winRate": 13.2, "tan": 121, "fuku": 86},
          {"bracket": "6枠", "winRate": 6.5, "tan": 67, "fuku": 79},
          {"bracket": "7枠", "winRate": 4.4, "tan": 47, "fuku": 73},
          {"bracket": "8枠", "winRate": 7.2, "tan": 75, "fuku": 77}
        ]
      }
    },
    "ダート": {
      "1200m": {
        "features": "3・4コーナーが急カーブ＆下り坂で外を回るロス大。「迷ったら内枠ベタ買い」。1枠の単回収率105。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.6, "tan": 105, "fuku": 81},
          {"bracket": "2枠", "winRate": 6.3, "tan": 68, "fuku": 88},
          {"bracket": "3枠", "winRate": 6.3, "tan": 76, "fuku": 75},
          {"bracket": "4枠", "winRate": 7.0, "tan": 79, "fuku": 79},
          {"bracket": "5枠", "winRate": 6.8, "tan": 87, "fuku": 79},
          {"bracket": "6枠", "winRate": 6.9, "tan": 82, "fuku": 89},
          {"bracket": "7枠", "winRate": 3.7, "tan": 48, "fuku": 80},
          {"bracket": "8枠", "winRate": 8.6, "tan": 92, "fuku": 79}
        ]
      },
      "1400m": {
        "features": "芝スタートで初角までの距離が長い。ペースが上がりやすく時計を要するタフなコース。1400m以上の距離で実績のあるスタミナタイプが好走。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.2, "tan": 65, "fuku": 71},
          {"bracket": "2枠", "winRate": 6.0, "tan": 73, "fuku": 75},
          {"bracket": "3枠", "winRate": 6.7, "tan": 83, "fuku": 83},
          {"bracket": "4枠", "winRate": 7.0, "tan": 79, "fuku": 73},
          {"bracket": "5枠", "winRate": 6.8, "tan": 87, "fuku": 82},
          {"bracket": "6枠", "winRate": 7.6, "tan": 85, "fuku": 80},
          {"bracket": "7枠", "winRate": 7.2, "tan": 80, "fuku": 83},
          {"bracket": "8枠", "winRate": 6.9, "tan": 79, "fuku": 89}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "21-17-14-123", "winRate": 12.0, "rentaiRate": 22.0, "placeRate": 30.0, "tan": 121},
          {"style": "先行", "results": "99-77-93-818", "winRate": 9.1, "rentaiRate": 16.0, "placeRate": 25.0, "tan": 89},
          {"style": "差し", "results": "57-75-68-964", "winRate": 4.9, "rentaiRate": 11.0, "placeRate": 17.0, "tan": 78},
          {"style": "追込", "results": "14-22-16-505", "winRate": 2.5, "rentaiRate": 6.5, "placeRate": 9.3, "tan": 31}
        ]
      },
      "1800m": {
        "features": "「内枠＆先行馬が断然有利」。最初のコーナーまでの距離が短くペースが上がりにくい。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.4, "tan": 85, "fuku": 85},
          {"bracket": "2枠", "winRate": 6.9, "tan": 68, "fuku": 79},
          {"bracket": "3枠", "winRate": 7.6, "tan": 84, "fuku": 83},
          {"bracket": "4枠", "winRate": 8.2, "tan": 88, "fuku": 80},
          {"bracket": "5枠", "winRate": 8.6, "tan": 89, "fuku": 87},
          {"bracket": "6枠", "winRate": 7.6, "tan": 74, "fuku": 87},
          {"bracket": "7枠", "winRate": 6.3, "tan": 64, "fuku": 76},
          {"bracket": "8枠", "winRate": 8.5, "tan": 84, "fuku": 88}
        ]
        ,"styles": [
          {"style": "逃げ", "results": "26-18-21-157", "winRate": 12.0, "rentaiRate": 20.0, "placeRate": 29.0, "tan": 53},
          {"style": "先行", "results": "119-122-95-929", "winRate": 9.4, "rentaiRate": 19.0, "placeRate": 27.0, "tan": 77},
          {"style": "差し", "results": "87-103-106-1188", "winRate": 5.9, "rentaiRate": 13.0, "placeRate": 20.0, "tan": 86},
          {"style": "追込", "results": "35-24-46-842", "winRate": 3.7, "rentaiRate": 6.2, "placeRate": 11.0, "tan": 109}
        ]
      },
      "1900m": {
        "features": "2枠の勝率10.1%、単回収率105と狙い目。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.4, "tan": 86, "fuku": 83},
          {"bracket": "2枠", "winRate": 10.1, "tan": 105, "fuku": 82},
          {"bracket": "3枠", "winRate": 4.3, "tan": 46, "fuku": 77},
          {"bracket": "4枠", "winRate": 8.3, "tan": 85, "fuku": 80},
          {"bracket": "5枠", "winRate": 8.2, "tan": 82, "fuku": 71},
          {"bracket": "6枠", "winRate": 7.0, "tan": 71, "fuku": 89},
          {"bracket": "7枠", "winRate": 8.8, "tan": 86, "fuku": 90},
          {"bracket": "8枠", "winRate": 5.9, "tan": 70, "fuku": 80}
        ]
      }
    }
  },

  // =================================================================
  // 🐻 札幌競馬場 (Sapporo)
  // =================================================================
  "札幌": {
    "芝": {
      "1200m": {
        "features": "8枠の勝率11.7%、単回114と大外が強い。",
        "stats": [
          {"bracket": "1枠", "winRate": 9.1, "tan": 98, "fuku": 76},
          {"bracket": "2枠", "winRate": 3.9, "tan": 43, "fuku": 85},
          {"bracket": "3枠", "winRate": 3.7, "tan": 39, "fuku": 73},
          {"bracket": "4枠", "winRate": 4.4, "tan": 49, "fuku": 82},
          {"bracket": "5枠", "winRate": 8.6, "tan": 104, "fuku": 87},
          {"bracket": "6枠", "winRate": 8.9, "tan": 101, "fuku": 72},
          {"bracket": "7枠", "winRate": 7.3, "tan": 79, "fuku": 87},
          {"bracket": "8枠", "winRate": 11.7, "tan": 114, "fuku": 94}
        ]
      },
      "1500m": {
        "features": "6枠・3枠の勝率が高い。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.9, "tan": 62, "fuku": 85},
          {"bracket": "2枠", "winRate": 8.8, "tan": 86, "fuku": 81},
          {"bracket": "3枠", "winRate": 9.0, "tan": 86, "fuku": 77},
          {"bracket": "4枠", "winRate": 7.9, "tan": 77, "fuku": 81},
          {"bracket": "5枠", "winRate": 8.0, "tan": 80, "fuku": 81},
          {"bracket": "6枠", "winRate": 9.8, "tan": 89, "fuku": 87},
          {"bracket": "7枠", "winRate": 8.5, "tan": 86, "fuku": 77},
          {"bracket": "8枠", "winRate": 6.2, "tan": 65, "fuku": 74}
        ]
      },
      "1800m": {
        "features": "7枠の単回収率129が光る。",
        "stats": [
          {"bracket": "1枠", "winRate": 12.4, "tan": 107, "fuku": 89},
          {"bracket": "2枠", "winRate": 7.6, "tan": 54, "fuku": 71},
          {"bracket": "3枠", "winRate": 9.0, "tan": 77, "fuku": 72},
          {"bracket": "4枠", "winRate": 11.0, "tan": 89, "fuku": 82},
          {"bracket": "5枠", "winRate": 6.5, "tan": 66, "fuku": 72},
          {"bracket": "6枠", "winRate": 7.1, "tan": 63, "fuku": 78},
          {"bracket": "7枠", "winRate": 13.5, "tan": 129, "fuku": 104},
          {"bracket": "8枠", "winRate": 7.7, "tan": 62, "fuku": 93}
        ]
      },
      "2000m": {
        "features": "1枠・5枠の勝率が高い。",
        "stats": [
          {"bracket": "1枠", "winRate": 9.2, "tan": 91, "fuku": 83},
          {"bracket": "2枠", "winRate": 8.3, "tan": 92, "fuku": 82},
          {"bracket": "3枠", "winRate": 8.0, "tan": 87, "fuku": 86},
          {"bracket": "4枠", "winRate": 5.9, "tan": 61, "fuku": 76},
          {"bracket": "5枠", "winRate": 9.3, "tan": 87, "fuku": 72},
          {"bracket": "6枠", "winRate": 7.5, "tan": 85, "fuku": 94},
          {"bracket": "7枠", "winRate": 5.4, "tan": 58, "fuku": 90},
          {"bracket": "8枠", "winRate": 7.2, "tan": 84, "fuku": 74}
        ]
      },
      "2600m": {
        "features": "2枠の単回収率148は驚異的。",
        "stats": [
          {"bracket": "1枠", "winRate": 9.1, "tan": 76, "fuku": 61},
          {"bracket": "2枠", "winRate": 16.7, "tan": 148, "fuku": 101},
          {"bracket": "3枠", "winRate": 9.9, "tan": 98, "fuku": 95},
          {"bracket": "4枠", "winRate": 5.4, "tan": 57, "fuku": 63},
          {"bracket": "5枠", "winRate": 7.9, "tan": 68, "fuku": 101},
          {"bracket": "6枠", "winRate": 10.0, "tan": 122, "fuku": 72},
          {"bracket": "7枠", "winRate": 1.2, "tan": 13, "fuku": 67},
          {"bracket": "8枠", "winRate": 8.1, "tan": 82, "fuku": 83}
        ]
      }
    },
    "ダート": {
      "1000m": {
        "features": "7枠・8枠の外枠が好走。",
        "stats": [
          {"bracket": "1枠", "winRate": 9.2, "tan": 88, "fuku": 70},
          {"bracket": "2枠", "winRate": 4.7, "tan": 57, "fuku": 64},
          {"bracket": "3枠", "winRate": 7.0, "tan": 56, "fuku": 67},
          {"bracket": "4枠", "winRate": 6.9, "tan": 75, "fuku": 71},
          {"bracket": "5枠", "winRate": 6.4, "tan": 55, "fuku": 70},
          {"bracket": "6枠", "winRate": 7.9, "tan": 80, "fuku": 83},
          {"bracket": "7枠", "winRate": 13.9, "tan": 99, "fuku": 94},
          {"bracket": "8枠", "winRate": 10.4, "tan": 90, "fuku": 96}
        ]
      },
      "1700m": {
        "features": "4枠・6枠の勝率が高い。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.1, "tan": 82, "fuku": 78},
          {"bracket": "2枠", "winRate": 5.3, "tan": 61, "fuku": 69},
          {"bracket": "3枠", "winRate": 4.7, "tan": 53, "fuku": 72},
          {"bracket": "4枠", "winRate": 8.8, "tan": 87, "fuku": 75},
          {"bracket": "5枠", "winRate": 8.4, "tan": 86, "fuku": 89},
          {"bracket": "6枠", "winRate": 8.7, "tan": 89, "fuku": 90},
          {"bracket": "7枠", "winRate": 8.1, "tan": 83, "fuku": 83},
          {"bracket": "8枠", "winRate": 7.6, "tan": 76, "fuku": 82}
        ]
      }
    }
  },

  // =================================================================
  // 🦑 函館競馬場 (Hakodate)
  // =================================================================
  "函館": {
    "芝": {
      "1200m": {
        "features": "5枠・8枠が好調。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.7, "tan": 71, "fuku": 82},
          {"bracket": "2枠", "winRate": 8.0, "tan": 80, "fuku": 92},
          {"bracket": "3枠", "winRate": 7.3, "tan": 74, "fuku": 80},
          {"bracket": "4枠", "winRate": 8.3, "tan": 74, "fuku": 75},
          {"bracket": "5枠", "winRate": 9.6, "tan": 93, "fuku": 77},
          {"bracket": "6枠", "winRate": 8.2, "tan": 84, "fuku": 84},
          {"bracket": "7枠", "winRate": 5.6, "tan": 62, "fuku": 72},
          {"bracket": "8枠", "winRate": 8.4, "tan": 100, "fuku": 86}
        ]
      },
      "1800m": {
        "features": "3枠の勝率11.8%が優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.1, "tan": 58, "fuku": 71},
          {"bracket": "2枠", "winRate": 8.3, "tan": 83, "fuku": 91},
          {"bracket": "3枠", "winRate": 11.8, "tan": 98, "fuku": 97},
          {"bracket": "4枠", "winRate": 7.3, "tan": 75, "fuku": 87},
          {"bracket": "5枠", "winRate": 8.5, "tan": 92, "fuku": 79},
          {"bracket": "6枠", "winRate": 7.1, "tan": 68, "fuku": 70},
          {"bracket": "7枠", "winRate": 8.6, "tan": 88, "fuku": 80},
          {"bracket": "8枠", "winRate": 5.7, "tan": 66, "fuku": 73}
        ]
      },
      "2000m": {
        "features": "6枠の単回収率132とベタ買いでプラス。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.3, "tan": 58, "fuku": 68},
          {"bracket": "2枠", "winRate": 11.3, "tan": 122, "fuku": 82},
          {"bracket": "3枠", "winRate": 5.7, "tan": 59, "fuku": 64},
          {"bracket": "4枠", "winRate": 9.0, "tan": 81, "fuku": 90},
          {"bracket": "5枠", "winRate": 8.1, "tan": 81, "fuku": 100},
          {"bracket": "6枠", "winRate": 11.6, "tan": 132, "fuku": 94},
          {"bracket": "7枠", "winRate": 6.0, "tan": 63, "fuku": 78},
          {"bracket": "8枠", "winRate": 4.3, "tan": 46, "fuku": 59}
        ]
      },
      "2600m": {
        "features": "1枠の単回収率117。",
        "stats": [
          {"bracket": "1枠", "winRate": 11.1, "tan": 117, "fuku": 94},
          {"bracket": "2枠", "winRate": 10.5, "tan": 67, "fuku": 68},
          {"bracket": "3枠", "winRate": 10.0, "tan": 82, "fuku": 84},
          {"bracket": "4枠", "winRate": 7.1, "tan": 56, "fuku": 77},
          {"bracket": "5枠", "winRate": 8.2, "tan": 110, "fuku": 104},
          {"bracket": "6枠", "winRate": 5.9, "tan": 63, "fuku": 74},
          {"bracket": "7枠", "winRate": 8.9, "tan": 99, "fuku": 73},
          {"bracket": "8枠", "winRate": 6.9, "tan": 65, "fuku": 93}
        ]
      }
    },
    "ダート": {
      "1000m": {
        "features": "1枠・8枠の内外両端が有利。",
        "stats": [
          {"bracket": "1枠", "winRate": 11.5, "tan": 102, "fuku": 90},
          {"bracket": "2枠", "winRate": 5.2, "tan": 47, "fuku": 86},
          {"bracket": "3枠", "winRate": 10.3, "tan": 88, "fuku": 77},
          {"bracket": "4枠", "winRate": 8.2, "tan": 76, "fuku": 68},
          {"bracket": "5枠", "winRate": 8.8, "tan": 90, "fuku": 76},
          {"bracket": "6枠", "winRate": 7.7, "tan": 69, "fuku": 88},
          {"bracket": "7枠", "winRate": 7.6, "tan": 66, "fuku": 77},
          {"bracket": "8枠", "winRate": 11.3, "tan": 90, "fuku": 96}
        ]
      },
      "1700m": {
        "features": "3枠の勝率10.2%、単回110と優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.2, "tan": 71, "fuku": 97},
          {"bracket": "2枠", "winRate": 4.3, "tan": 43, "fuku": 87},
          {"bracket": "3枠", "winRate": 10.2, "tan": 110, "fuku": 97},
          {"bracket": "4枠", "winRate": 5.7, "tan": 65, "fuku": 67},
          {"bracket": "5枠", "winRate": 8.3, "tan": 86, "fuku": 81},
          {"bracket": "6枠", "winRate": 8.2, "tan": 81, "fuku": 78},
          {"bracket": "7枠", "winRate": 9.6, "tan": 98, "fuku": 96},
          {"bracket": "8枠", "winRate": 7.7, "tan": 65, "fuku": 65}
        ]
      }
    }
  },

  // =================================================================
  // 🎢 小倉競馬場 (Kokura)
  // =================================================================
  "小倉": {
    "芝": {
      "1200m": {
        "features": "7・8枠の外枠が回収率的においしい。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.2, "tan": 83, "fuku": 78},
          {"bracket": "2枠", "winRate": 4.7, "tan": 56, "fuku": 70},
          {"bracket": "3枠", "winRate": 5.7, "tan": 74, "fuku": 83},
          {"bracket": "4枠", "winRate": 4.5, "tan": 54, "fuku": 72},
          {"bracket": "5枠", "winRate": 7.3, "tan": 88, "fuku": 76},
          {"bracket": "6枠", "winRate": 5.7, "tan": 65, "fuku": 79},
          {"bracket": "7枠", "winRate": 8.7, "tan": 98, "fuku": 93},
          {"bracket": "8枠", "winRate": 7.7, "tan": 102, "fuku": 89}
        ]
      },
      "1800m": {
        "features": "5枠の勝率9.1%が優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.8, "tan": 59, "fuku": 75},
          {"bracket": "2枠", "winRate": 8.0, "tan": 86, "fuku": 72},
          {"bracket": "3枠", "winRate": 8.4, "tan": 81, "fuku": 73},
          {"bracket": "4枠", "winRate": 5.4, "tan": 60, "fuku": 81},
          {"bracket": "5枠", "winRate": 9.1, "tan": 86, "fuku": 77},
          {"bracket": "6枠", "winRate": 7.8, "tan": 83, "fuku": 91},
          {"bracket": "7枠", "winRate": 8.6, "tan": 93, "fuku": 89},
          {"bracket": "8枠", "winRate": 7.1, "tan": 82, "fuku": 86}
        ]
      },
      "2000m": {
        "features": "4枠の勝率11.1%、単回112と狙い目。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.8, "tan": 91, "fuku": 73},
          {"bracket": "2枠", "winRate": 9.3, "tan": 82, "fuku": 82},
          {"bracket": "3枠", "winRate": 4.5, "tan": 49, "fuku": 86},
          {"bracket": "4枠", "winRate": 11.1, "tan": 112, "fuku": 84},
          {"bracket": "5枠", "winRate": 7.3, "tan": 84, "fuku": 74},
          {"bracket": "6枠", "winRate": 9.3, "tan": 88, "fuku": 82},
          {"bracket": "7枠", "winRate": 6.3, "tan": 71, "fuku": 82},
          {"bracket": "8枠", "winRate": 5.8, "tan": 66, "fuku": 81}
        ]
      },
      "2600m": {
        "features": "2枠・8枠の単回収率が高い。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.5, "tan": 70, "fuku": 81},
          {"bracket": "2枠", "winRate": 10.8, "tan": 126, "fuku": 109},
          {"bracket": "3枠", "winRate": 2.6, "tan": 27, "fuku": 93},
          {"bracket": "4枠", "winRate": 8.8, "tan": 77, "fuku": 85},
          {"bracket": "5枠", "winRate": 6.9, "tan": 69, "fuku": 96},
          {"bracket": "6枠", "winRate": 10.6, "tan": 100, "fuku": 70},
          {"bracket": "7枠", "winRate": 4.0, "tan": 38, "fuku": 54},
          {"bracket": "8枠", "winRate": 12.7, "tan": 124, "fuku": 91}
        ]
      }
    },
    "ダート": {
      "1000m": {
        "features": "2・3枠の回収率が安定。",
        "stats": [
          {"bracket": "1枠", "winRate": 5.1, "tan": 57, "fuku": 96},
          {"bracket": "2枠", "winRate": 8.9, "tan": 89, "fuku": 86},
          {"bracket": "3枠", "winRate": 8.3, "tan": 90, "fuku": 85},
          {"bracket": "4枠", "winRate": 6.9, "tan": 73, "fuku": 79},
          {"bracket": "5枠", "winRate": 9.3, "tan": 92, "fuku": 72},
          {"bracket": "6枠", "winRate": 7.8, "tan": 75, "fuku": 86},
          {"bracket": "7枠", "winRate": 6.2, "tan": 63, "fuku": 76},
          {"bracket": "8枠", "winRate": 7.4, "tan": 88, "fuku": 93}
        ]
      },
      "1700m": {
        "features": "6枠の勝率・回収率が高い。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.9, "tan": 81, "fuku": 90},
          {"bracket": "2枠", "winRate": 6.6, "tan": 88, "fuku": 84},
          {"bracket": "3枠", "winRate": 6.1, "tan": 67, "fuku": 72},
          {"bracket": "4枠", "winRate": 7.0, "tan": 78, "fuku": 84},
          {"bracket": "5枠", "winRate": 6.1, "tan": 71, "fuku": 72},
          {"bracket": "6枠", "winRate": 8.5, "tan": 93, "fuku": 89},
          {"bracket": "7枠", "winRate": 5.3, "tan": 66, "fuku": 69},
          {"bracket": "8枠", "winRate": 7.7, "tan": 88, "fuku": 81}
        ]
      }
    }
  },
  
　// =================================================================
  // 🎢 福島競馬場 (Kokura)
  // =================================================================
  
  "福島": {
    "芝": {
      "1200m": {
        "features": "【Aコースは内枠・先行、Bコースは外枠・差し】スタート後すぐ上り坂でペースが上がりにくく基本は内前有利。＜激アツ＞Bコース替わり時、前走4角10番手以下かつ今回8枠に入った馬（単複回収率138%）。データ上は2枠・3枠の成績も良い。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.2, "tan": 79, "fuku": 92},
          {"bracket": "2枠", "winRate": 10.5, "tan": 106, "fuku": 89},
          {"bracket": "3枠", "winRate": 9.5, "tan": 110, "fuku": 82},
          {"bracket": "4枠", "winRate": 7.1, "tan": 81, "fuku": 78},
          {"bracket": "5枠", "winRate": 4.8, "tan": 61, "fuku": 59},
          {"bracket": "6枠", "winRate": 6.0, "tan": 68, "fuku": 83},
          {"bracket": "7枠", "winRate": 4.5, "tan": 57, "fuku": 77},
          {"bracket": "8枠", "winRate": 5.5, "tan": 71, "fuku": 89}
        ]
      },
      "1800m": {
        "features": "【Aコースは内枠・先行、Bコースは外枠・差し】過去10年、Aコース使用のラジオNIKKEI賞は1枠と逃げ馬の複勝率が非常に高いが、Bコース使用の福島牝馬Sでは大きく落ちる傾向。データ上は3枠の単回収率111と優秀。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.5, "tan": 81, "fuku": 75},
          {"bracket": "2枠", "winRate": 8.2, "tan": 99, "fuku": 78},
          {"bracket": "3枠", "winRate": 9.7, "tan": 111, "fuku": 98},
          {"bracket": "4枠", "winRate": 7.8, "tan": 91, "fuku": 89},
          {"bracket": "5枠", "winRate": 5.8, "tan": 62, "fuku": 89},
          {"bracket": "6枠", "winRate": 6.0, "tan": 67, "fuku": 78},
          {"bracket": "7枠", "winRate": 5.6, "tan": 66, "fuku": 84},
          {"bracket": "8枠", "winRate": 5.6, "tan": 63, "fuku": 65}
        ]
      },
      "2000m": {
        "features": "タフなコースで差しが届く。初角まで長くペースが上がりやすい。Bコース替わりでさらに差し有利に。＜激アツ＞持続力が活きるキズナ産駒（単回240%・複回135%）。勝ち馬の上がりが35秒以上かかるタフな展開を想定する。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.0, "tan": 64, "fuku": 79},
          {"bracket": "2枠", "winRate": 5.6, "tan": 70, "fuku": 63},
          {"bracket": "3枠", "winRate": 8.8, "tan": 84, "fuku": 85},
          {"bracket": "4枠", "winRate": 9.4, "tan": 119, "fuku": 93},
          {"bracket": "5枠", "winRate": 8.8, "tan": 90, "fuku": 86},
          {"bracket": "6枠", "winRate": 5.5, "tan": 61, "fuku": 76},
          {"bracket": "7枠", "winRate": 6.5, "tan": 80, "fuku": 83},
          {"bracket": "8枠", "winRate": 5.6, "tan": 72, "fuku": 77}
        ]
      },
      "2600m": {
        "features": "序盤スローからのまくり合戦になりやすく、超タフな消耗戦になる。オルフェーヴル（単回231%）やゴールドシップ（単回153%）などスタミナ豊富なステイゴールド系産駒を探せ！データ上は2枠や8枠の回収率が高い。",
        "stats": [
          {"bracket": "1枠", "winRate": 7.4, "tan": 93, "fuku": 83},
          {"bracket": "2枠", "winRate": 9.2, "tan": 91, "fuku": 105},
          {"bracket": "3枠", "winRate": 7.7, "tan": 78, "fuku": 76},
          {"bracket": "4枠", "winRate": 6.5, "tan": 69, "fuku": 65},
          {"bracket": "5枠", "winRate": 8.2, "tan": 85, "fuku": 74},
          {"bracket": "6枠", "winRate": 8.8, "tan": 75, "fuku": 76},
          {"bracket": "7枠", "winRate": 4.8, "tan": 63, "fuku": 60},
          {"bracket": "8枠", "winRate": 6.7, "tan": 86, "fuku": 110}
        ]
      }
    },
    "ダート": {
      "1150m": {
        "features": "基本は芝を長く走れる外枠有利。しかし【道悪の時は内枠有利】に一変する。馬場が高速化しタイムトライアルになるため外を回すロスが大きくなる。＜激アツ＞重・不良時の1枠（単回265%・複回153%）。",
        "stats": [
          {"bracket": "1枠", "winRate": 8.2, "tan": 100, "fuku": 96},
          {"bracket": "2枠", "winRate": 5.0, "tan": 67, "fuku": 74},
          {"bracket": "3枠", "winRate": 8.8, "tan": 107, "fuku": 92},
          {"bracket": "4枠", "winRate": 6.6, "tan": 73, "fuku": 78},
          {"bracket": "5枠", "winRate": 5.5, "tan": 66, "fuku": 74},
          {"bracket": "6枠", "winRate": 5.4, "tan": 64, "fuku": 74},
          {"bracket": "7枠", "winRate": 4.5, "tan": 55, "fuku": 63},
          {"bracket": "8枠", "winRate": 9.3, "tan": 94, "fuku": 95}
        ]
      },
      "1700m": {
        "features": "実はタフなコースレイアウト。1、2コーナーが下り坂でペースが上がりやすいため、「距離短縮組」と「差し馬」が有利になりやすい。枠順は2枠と6枠の勝率・回収率が安定している。",
        "stats": [
          {"bracket": "1枠", "winRate": 6.8, "tan": 78, "fuku": 81},
          {"bracket": "2枠", "winRate": 7.9, "tan": 88, "fuku": 84},
          {"bracket": "3枠", "winRate": 6.5, "tan": 74, "fuku": 76},
          {"bracket": "4枠", "winRate": 5.1, "tan": 61, "fuku": 77},
          {"bracket": "5枠", "winRate": 6.5, "tan": 85, "fuku": 71},
          {"bracket": "6枠", "winRate": 7.9, "tan": 88, "fuku": 82},
          {"bracket": "7枠", "winRate": 6.9, "tan": 82, "fuku": 82},
          {"bracket": "8枠", "winRate": 7.4, "tan": 81, "fuku": 85}
        ]
      },
      "2400m": {
        "features": "逃げ・先行馬が断然有利。向正面からゴールまで上り坂が続き、全馬が脚を無くすため4角の位置取りが直結する。過去5年で逃げ馬単回582%、先行馬単回317%。「距離延長＋前走差し追い込み」の馬も単回224%と狙い目。",
        "stats": []
      }
    }
  }
};
