/* eslint-disable prettier/prettier */

// apostle profile image
import warrior from "../img/apostle/warrior_nft.jpg";
import bard from "../img/apostle/bard_nft.png";
import berserker from "../img/apostle/berserker_nft.jpg";
import dragoon from "../img/apostle/dragoon_nft.jpg";
import gaunlet from "../img/apostle/gauntlet_nft.png";
import hunter from "../img/apostle/hunter_nft.png";
import knight from "../img/apostle/knight_nft.jpg";
import mage from "../img/apostle/mage_nft.png";
import priest from "../img/apostle/priest_nft.jpg";
import rogue from "../img/apostle/rogue_nft.png";
import shaman from "../img/apostle/shaman_nft.jpg";
import summoner from "../img/apostle/summoner_nft.jpg";

// skill image
import warrior_hangry_whirlwind from "../img/apostle/skills/warrior_hangry_whirlwind.png";
import warrior_JumpnBash from "../img/apostle/skills/warrior_JumpnBash.jpg";
import warrior_flyingAxe from "../img/apostle/skills/warrior_flyingAxe.jpg";
import warrior_slammaJamma from "../img/apostle/skills/warrior_slammaJamma.jpg";
import guardian_dayOfJudgement from "../img/apostle/skills/guardian_dayOfJudgement.jpg";
import guardian_imComing from "../img/apostle/skills/guardian_imComing.png";
import guardian_shieldBash from "../img/apostle/skills/guardian_shieldBash.jpg";
import hunter_inTheZone from "../img/apostle/skills/hunter_inTheZone.jpg";
import hunter_piercingShot from "../img/apostle/skills/hunter_piercingShot.png";
import hunter_slidingDash from "../img/apostle/skills/hunter_slidingDash.jpg";
import hunter_sniped from "../img/apostle/skills/hunter_sniped.png";
import mage_dangerCircle from "../img/apostle/skills/mage_dangerCircle.jpg";
import mage_liftFall from "../img/apostle/skills/mage_liftFall.jpg";
import mage_starCaller from "../img/apostle/skills/mage_starCaller.jpg";
import priest_cheerleading from "../img/apostle/skills/priest_cheerleading.png";
import priest_divineFountain from "../img/apostle/skills/priest_divineFountain.png";
import priest_revenge from "../img/apostle/skills/priest_revenge.jpg";
import rogues_cantTouchThis from "../img/apostle/skills/rogues_cantTouchThis.png";
import rogues_fromBehind from "../img/apostle/skills/rogues_fromBehind.png";
import rogues_ninjutsu from "../img/apostle/skills/rogues_ninjutsu.jpg";
import rogues_sneakyStrike from "../img/apostle/skills/rogues_sneakyStrike.jpg";

// skill video
import guardian_shieldBash_video from "../img/apostle/skills/video/guardian_ShieldBash.mp4";
import mage_StarCaller_video from "../img/apostle/skills/video/mage_StarCaller.mp4";
import priest_DivineFountain_video from "../img/apostle/skills/video/priest_DivineFountain.mp4";
import Summoner_promotion_video from "../img/apostle/skills/video/Summoner_promotion.mp4";
import warrior_LeapStrike_video from "../img/apostle/skills/video/warrior_LeapStrike.mp4";

export default {
  apostleList: [{
      name: "Warrior",
      value: 0,
      type: "Damage, Tank",
      link: warrior,
      range: "Tầm gần",
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189513977755337004/",
      detail: "Warrior là bậc thầy của cả chiến đấu tấn công và phòng thủ, điều đó khiến họ trở thành những anh hùng tiền tuyến đáng tin cậy. Họ đi kèm với sự kết hợp đa dạng của các Kỹ năng cận chiến, có lượng máu và áo giáp khá tốt, giúp họ duy trì bản thân trong các cuộc giao tranh.",
      skill: [{
          name: "Hangry Whirlwind",
          value: 0,
          type: "Nộ",
          damageType: "Sát thương vật lý, hồi máu",
          target: "Diện rộng",
          detail: "Tấn công những kẻ địch xung quanh, gây [100% ATK] sát thương vật lý và tự hồi máu trong 30% tổng sát thương gây ra.",
          link: warrior_hangry_whirlwind,
          linkvideo: "",
        },
        {
          name: "Leap Strike",
          value: 1,
          type: "Kích hoạt",
          damageType: "Sát thương vật lý",
          target: "Diện rộng",
          detail: "Nhảy đến vị trí của kẻ thù mục tiêu và tấn công chúng để gây [x] sát thương vật lý. Nếu mục tiêu bị làm chậm hoặc bị choáng, chúng sẽ nhận sát thương gấp đôi.",
          link: warrior_JumpnBash,
          linkvideo: warrior_LeapStrike_video,
        }, {
          name: "Flying Axe",
          value: 2,
          type: "Kích hoạt",
          damageType: "Sát thương vật lý",
          target: "Mục tiêu đầu",
          detail: "Ném rìu về hướng mục tiêu, gây sát thương lên kẻ địch đầu tiên trúng phải và làm chậm chúng 20% trong 2 giây.",
          link: warrior_flyingAxe,
          linkvideo: "",
        }, {
          name: "Slamma Jamma",
          value: 3,
          type: "Kích hoạt",
          damageType: "Sát thương vật lý, gây choáng",
          target: "Diện rộng",
          detail: "Sau 2 giây, Caster phóng vũ khí theo hình nón về hướng mục tiêu, gây [x] (+ 75% ATK) sát thương vật lý lên kẻ địch trúng phải và hất tung chúng trong 0,5 giây. Nếu bất kỳ kẻ thù nào bị làm chậm hoặc làm choáng, chúng sẽ nhận gấp đôi sát thương. Sát thương gây ra cho Avatar tăng lên 150%.",
          link: warrior_slammaJamma,
          linkvideo: "",
        },
      ],
    },
    {
      name: "Bard",
      value: 1,
      type: "Healer, Support",
      range: "Tầm xa",
      link: bard,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189518375801848108/",
      detail: "Bard giống như 1 supporter. Bard sẽ không xông pha đứng đầu đội hình mà chúng sẽ đứng ở phía sau đảm nhiệm cương vụ hỗ trợ cho các Apostle khác trên chiến trường. Bard sẽ cast nhiều phép bổ trợ giúp các Apostle trong đội hình tăng các chỉ số và máu.",
      skill: [{
        name: "TBA",
        value: 0,
        type: "Nộ",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 1,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 2,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 3,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, ]
    },
    {
      name: "Berserker",
      value: 2,
      type: "Damage",
      range: "Tầm gần",
      link: berserker,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189528271406498092/",
      detail: "Các Berserker sẽ có nhiệm vụ đứng ở tuyến trước, chúng là tiên phong của đội hình. Và chúng thường được ghép bài với Priest. Chúng có các kỹ năng xâm nhập vào giữa đội hình đối phương nhằm mục đích để gây náo loạn đội hình.",
      skill: [{
        name: "TBA",
        value: 0,
        type: "Nộ",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 1,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 2,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 3,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, ]
    },
    {
      name: "Dragoon",
      value: 3,
      type: "Damage, Support",
      range: "Tầm gần",
      link: dragoon,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189524972871614764/",
      detail: "Dragoon là Apostle với tầm đánh gần gây sát thương vật lý khá cao. Vị trí của Dragoon thường sẽ là ở giữa đội hình. Nếu xếp vậy sẽ tạo cho bạn lợi thế khi kẻ địch cố gắng xâm nhập vào hàng sau đội hình của bạn nhằm tiêu diệt các Priest hay Mage của bạn.",
      skill: [{
        name: "TBA",
        value: 0,
        type: "Nộ",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 1,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 2,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 3,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, ]
    },
    {
      name: "Guardian",
      value: 4,
      type: "Tank, Healer",
      range: "Tầm gần",
      link: gaunlet,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189519475313475884/",
      detail: "Guardian bảo vệ đồng minh của họ bằng các kỹ năng phòng thủ, đóng vai trò là Xe tăng chính của đội. Guardian sẽ ở gần các đồng minh cần sự giúp đỡ nhất và mang lại sự bền vững bổ sung cho cả đội với các phép bổ trợ cứu mạng và hồi máu nhẹ.",
      skill: [{
          name: "Sentinel’s Smash",
          value: 0,
          type: "Nộ",
          damageType: "Sát thương vật lý, đẩy lùi",
          target: "Diện rộng",
          detail: "Đập kẻ địch trước mặt bằng khiên của hắn, gây [50] (+ 5% HP tối đa) (+ 20% ATK) sát thương vật lý và đánh bật chúng trở lại.",
          link: "",
          linkvideo: "",
        },
        {
          name: "I’m Coming!",
          value: 1,
          type: "Kích hoạt",
          damageType: "Che chắn, tăng chỉ số",
          target: "Mục tiêu chọn",
          detail: "Lao tới đồng minh có HP thấp nhất trong phạm vi, ưu tiên Avatar và che chắn cho cả hai trong [60] (+ 20% INT) trong 3 giây.",
          link: guardian_imComing,
          linkvideo: "",
        }, {
          name: "Day of Judgement",
          value: 2,
          type: "Kích hoạt",
          damageType: "Sát thương phép",
          target: "Diện rộng",
          detail: "Kêu gọi một đòn tấn công trời giáng vào kẻ thù mục tiêu, gây [150] (+ 30% lượng máu đã mất của mục tiêu) sát thương phép. Avatars chịu một nửa sát thương.",
          link: guardian_dayOfJudgement,
          linkvideo: "",
        }, {
          name: "Shield Bash",
          value: 3,
          type: "Kích hoạt",
          damageType: "Sát thương vật lý, làm choáng",
          target: "Mục tiêu chọn",
          detail: "Nhảy tới vị trí của kẻ địch mục tiêu, gây [60] (+ 50% DEF) sát thương vật lý và làm choáng nó trong 2 giây.",
          link: guardian_shieldBash,
          linkvideo: guardian_shieldBash_video,
        }
      ]
    },
    {
      name: "Hunter",
      value: 5,
      type: "Damage",
      range: "Tầm xa",
      link: hunter,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189520574825103660/",
      detail: "Hunter bắn tỉa kẻ thù ở xa. Sử dụng đồng minh làm chỗ dựa, Hunter có thể hạ gục đội địch từng người một. Họ có các Kỹ năng cho phép họ khóa các mục tiêu nhất định, cung cấp sát thương cực vật lý lớn. Tuy nhiên, khi cận chiến, chúng sẽ hẹo khá nhanh.",
      skill: [{
          name: "Sniped",
          value: 0,
          type: "Nộ",
          damageType: "Sát thương vật lý",
          target: "Mục tiêu ngẫu nhiên",
          detail: "Tạo Dấu ấn Săn bắn lên hai kẻ thù ngẫu nhiên trong 4 giây. Sát thương từ đồng minh chống lại mục tiêu kích nổ dấu ấn, gây [50] + (15% ATK) sát thương vật lý.",
          link: hunter_sniped,
          linkvideo: "",
        },
        {
          name: "Piercing Shot",
          value: 1,
          type: "Kích hoạt",
          damageType: "Sát thương vật lý",
          target: "Đa mục tiêu",
          detail: "Ngắm mục tiêu và sau 1.5 giây, nó bắn một mũi tên xuyên qua Avatar của kẻ thù, gây [100] (+ 40% ATK) sát thương vật lý cho 2 kẻ địch đầu tiên trúng phải trên đường đi. Sát thương gây ra sẽ tăng gấp đôi nếu phát bắn trúng Avatar của đối phương.",
          link: hunter_piercingShot,
          linkvideo: "",
        }, {
          name: "In the Zone",
          value: 2,
          type: "Kích hoạt",
          damageType: "Sát thương vật lý, buff",
          target: "Đa mục tiêu",
          detail: "Vào “chế độ focus” trong 6 giây. Nhận 45% tốc độ đánh, đồng thời tăng sức mạnh cho các đòn tấn công tự động của nó, những mũi tên này bắn thêm vào 2 kẻ địch phía trước, mỗi mũi tên gây [0] (+ 40% ATK) sát thương vật lý.",
          link: hunter_inTheZone,
          linkvideo: "",
        }, {
          name: "Sliding Dash",
          value: 3,
          type: "Kích hoạt",
          damageType: "Sát thương vật lý",
          target: "Diện rộng",
          detail: "Trở nên không thể target trong 0,75 giây, blink đến vị trí mục tiêu và làm choáng tất cả các Apostle đối phương với 50% HP trở xuống khi đến nơi. Số năng lượng tiêu tốn để dùng thẻ sẽ giảm đi 1 sau mỗi một 1 lần đánh thường.",
          link: hunter_slidingDash,
          linkvideo: "",
        }
      ]
    },
    {
      name: "Knight",
      value: 6,
      type: "Tank, Support",
      range: "Tầm gần",
      link: knight,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189526072383242540/",
      detail: "Knight trong chiến đấu được trang bị giáp và khiên kiểu cổ điển. Chính vì vậy chúng sẵn sàng đối đầu với bất cứ kẻ địch nào dám thách thức chúng. Knight phù hợp nhất là ở tuyến phòng thủ. Đây được coi như là một semi-tank của đội hình.",
      skill: [{
        name: "TBA",
        value: 0,
        type: "Nộ",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 1,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 2,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 3,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, ]
    },
    {
      name: "Mage",
      value: 7,
      type: "Damage",
      range: "Tầm xa",
      link: mage,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189516176778592556/",
      detail: "Mage là những pháp sư thông minh có thể sử dụng nhiều sức mạnh nguyên tố khác nhau. Phần lớn các kỹ năng pháp sư gây sát thương theo diện tích (AoE). Một quả cầu lửa đúng lúc có thể là tất cả những gì bạn cần để giành chiến thắng, nhưng ngắm trượt cũng có thể khiến bạn thua trận…",
      skill: [{
          name: "Spirit Bomb",
          value: 0,
          type: "Nộ",
          damageType: "Sát thương phép",
          target: "Diện rộng",
          detail: "Gọi một quả cầu năng lượng rơi vào vị trí mục tiêu hiện tại của Avatar đối phương, quả cầu này sẽ tiếp đất sau 1 giây, gây [50 + 60% INT] sát thương phép cho tất cả kẻ địch trong khu vực khi va chạm.",
          link: "",
          linkvideo: "",
        },
        {
          name: "Lift // Fall",
          value: 1,
          type: "Kích hoạt",
          damageType: "Sát thương phép, đẩy lùi",
          target: "Diện rộng",
          detail: "Đánh bật tất cả các Apostle của đối phương trong khu vực mục tiêu trong 3 giây, gây [x] (+ 15% Máu tối đa) sát thương phép khi tiếp đất.",
          link: mage_liftFall,
          linkvideo: "",
        }, {
          name: "Danger Circle",
          value: 2,
          type: "Kích hoạt",
          damageType: "Sát thương phép, làm choáng",
          target: "Đa mục tiêu",
          detail: "Tung một vòng tròn ma thuật theo hướng mục tiêu, gây [75] (+ 30% INT) sát thương phép lên 2 kẻ địch đầu tiên mà nó đi qua và làm chúng choáng váng trong 1.5 giây.",
          link: mage_dangerCircle,
          linkvideo: "",
        }, {
          name: "Starcaller",
          value: 3,
          type: "Kích hoạt",
          damageType: "Sát thương phép",
          target: "Diện rộng",
          detail: "Gọi xuống 10 Thiên thạch trong 5 giây tấn công ngẫu nhiên vào khu vực mục tiêu, mỗi thiên thạch gây [60] (+ 50% INT) sát thương phép.",
          link: mage_starCaller,
          linkvideo: mage_StarCaller_video,
        }
      ]
    },
    {
      name: "Priest",
      value: 8,
      type: "Healer",
      range: "Tầm xa",
      link: priest,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189521674336731436/",
      detail: "Priest là người chữa bệnh cho bạn. Họ có Kỹ năng chữa bệnh mạnh nhất trong số tất cả các Apostle, và thậm chí có thể hồi sinh ngay lập tức các đồng minh đã ngã. Trên hết, họ cũng có các Kỹ năng sẽ gây sát thương lớn lên những kẻ địch giết đồng minh.",
      skill: [{
        name: "Juicin’ Up",
        value: 0,
        type: "Nộ",
        damageType: "Hồi phục",
        target: "Mục tiêu đơn",
        detail: "Phục hồi [125] HP cho đồng minh có HP thấp nhất. Hồi máu tăng lên [250] cho những mục tiêu dưới 40% Máu.",
        link: "",
        linkvideo: "",
      }, {
        name: "Revenge",
        value: 1,
        type: "Kích hoạt",
        damageType: "Sát thương phép, hồi phục",
        target: "Diện rộng, mục tiêu đơn",
        detail: "Chọn một đồng minh, gây [50] (+ 10% INT) sát thương phép cho tất cả kẻ địch ở gần đồng minh. Sát thương gây ra tăng tỷ lệ thuận với lượng HP bị mất của đồng minh mục tiêu, lên đến 50%.",
        link: priest_revenge,
        linkvideo: "",
      }, {
        name: "Divine Fountain",
        value: 2,
        type: "Kích hoạt",
        damageType: "Hồi phục",
        target: "Diện rộng",
        detail: "Tạo một khu vực tại vị trí mục tiêu trong 10 giây, hồi máu cho tất cả đồng minh [10] (+ 15% INT) trong khu vực đó mỗi giây.",
        link: priest_divineFountain,
        linkvideo: priest_DivineFountain_video,
      }, {
        name: "Cheerleading",
        value: 3,
        type: "Kích hoạt",
        damageType: "Buff",
        target: "Diện rộng",
        detail: "Tăng 25% tốc độ tấn công của đồng minh và 30INT trong 6 giây.",
        link: priest_cheerleading,
        linkvideo: "",
      }]
    },
    {
      name: "Rogue",
      value: 9,
      type: "Damage",
      range: "Tầm gần",
      link: rogue,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189517276290220332/",
      detail: "Rogues xuất sắc trong các vụ ám sát. Sử dụng các Kỹ năng lén lút và tàng hình, Rogues lẻn vào vị trí và sau đó thịt hết các mục tiêu nhỏ bé phía sau của kẻ địch. Hạ gục một Mage có thể rất mạnh mẽ, nhưng việc thoát ra từ phía sau chiến tuyến của kẻ thù có thể là một phần khó khăn.",
      skill: [{
        name: "From Behind",
        value: 0,
        type: "Nộ",
        damageType: "Sát thương vật lý",
        target: "Mục tiêu đơn",
        detail: "Nhảy ra phía sau kẻ địch có lượng HP thấp nhất trong phạm vi và gây [x] (+ 100% ATK) sát thương vật lý khi trúng đòn.",
        link: rogues_fromBehind,
        linkvideo: "",
      }, {
        name: "Sneaky Strike",
        value: 1,
        type: "Kích hoạt",
        damageType: "Buff",
        target: "Bản thân",
        detail: "Rogue nhận thêm + 50% tốc độ đánh cho 4 đòn đánh cơ bản tiếp theo trong vòng 4 giây. Đòn đánh cơ bản cuối cùng gây thêm + 50% sát thương.",
        link: rogues_sneakyStrike,
        linkvideo: "",
      }, {
        name: "Can’t Touch This",
        value: 2,
        type: "Kích hoạt",
        damageType: "Sát thương vật lý, né",
        target: "Diện rộng",
        detail: "Tránh tất cả các đòn tấn công cơ bản nhận vào trong 3 giây. Khi kết thúc hiệu ứng, gây [40] (+ 20% ATK) sát thương vật lý cho các đối thủ xung quanh, tăng 20% cho mỗi đòn tấn công né được.",
        link: rogues_cantTouchThis,
        linkvideo: "",
      }, {
        name: "Ninjutsu",
        value: 3,
        type: "Kích hoạt",
        damageType: "Sát thương vật lý",
        target: "Mục tiêu đơn",
        detail: "Rogue tạo ra một Phân thân Bóng tối, trước khi dịch chuyển đến vị trí mục tiêu. Bản sao có 100% thuộc tính của người chơi và mất 10% HP tối đa mỗi giây và tự động tấn công kẻ thù gần nhất.",
        link: rogues_ninjutsu,
        linkvideo: "",
      }]
    },
    {
      name: "Shaman",
      value: 10,
      type: "Damage, Support",
      range: "Tầm xa",
      link: shaman,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189522773848359212/",
      detail: "Trong chiến đấu các Shaman cũng có nhiệm vụ hỗ trợ cho đồng minh. Chúng có khả năng loại bỏ các hiệu ứng và có khả năng hồi máu theo từng đợt. Tuy không nhiều nhưng chúng sẽ cực kỳ hiệu quả nếu bạn sử dụng đúng cách. Không những thế chúng còn có các skill gây ra các hiệu ứng bất lợi cho phía đội hình của địch.",
      skill: [{
        name: "TBA",
        value: 0,
        type: "Nộ",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 1,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 2,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 3,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }]
    },
    {
      name: "Summoner",
      value: 11,
      type: "Damage, Healer",
      range: "Tầm xa",
      link: summoner,
      linkOS: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/95304309179396549571695629844645662043614112156987503316211189523873359986988/",
      detail: "Trong chiến đấu các Summoner có thể triệu hồi các linh hồn để gây sát thương cho đội hình địch. Summoner yêu cầu người chơi cần có kinh nghiệm căn chỉnh thời gian vì từ lúc cast phép đến lúc phép của bạn có hiệu lực thì sẽ mất 1 khoảng thời gian nhỏ. Nếu bạn không căn chỉnh chính xác, phép của bạn sẽ có hiệu quả không được cao.",
      skill: [{
        name: "TBA",
        value: 0,
        type: "Nộ",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 1,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: Summoner_promotion_video,
      }, {
        name: "TBA",
        value: 2,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, {
        name: "TBA",
        value: 3,
        type: "Kích hoạt",
        damageType: "TBA",
        target: "TBA",
        detail: "TBA",
        link: "",
        linkvideo: "",
      }, ]
    },
  ]
}