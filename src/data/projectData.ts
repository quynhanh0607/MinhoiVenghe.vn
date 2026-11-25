export interface HeritageCardItem {
  id: string;
  anchorId: string;
  categoryLabel: string;
  title: string;
  artForm: string;
  summary: string;
  blessing: string;
  frontImage: string;
  theme: {
    frontBorder: string;
    frontBg: string;
    backGradient: string;
    backBorder: string;
    categoryText: string;
    titleText: string;
    subtitleText: string;
    buttonBg: string;
    buttonText: string;
    accentHex: string;
  };
}

export interface HeritagePillarItem {
  id: string;
  cardLabel: string;
  title: string;
  tag: string;
  artName: string;
  artDescription: {
    prefix: string;
    highlight: string;
    suffix: string;
    highlightAccent?: string;
    highlightSecond?: string;
    suffixSecond?: string;
  };
  historyTitle: string;
  historyBody: string;
  historyHighlights: string[];
  signatureTitle: string;
  signatureBody: string;
  signatureSubline?: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imageFocusClass: string;
  theme: 'dan' | 'ca' | 'mua' | 'kich';
}

export interface HeritageLocationItem {
  id: string;
  orderLabel: string;
  name: string;
  accentColor: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  descriptionParts: Array<{ text: string; bold?: boolean }>;
}

export interface MissContestantItem {
  id: string;
  name: string;
  sbd: string;
  province: string;
  quote: string;
  image: string;
  artAffiliation: string;
}

export const BRAND_LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCddaWFXC18S_-DMr_ZdbD9P4yY_ZOQgp7crzlVnSp1Gde1ngJSzyx3eoxmKGE0pqLVtcYU-FfHrTQlVaztjTDxPejF74C-c_67tLisDPArYmMBfFdk_IAP4JggWZ3-jLAK_4J1njrjgLBGmARqoOD42lfhSnVNwZaU83ir7Nr_uGyrEFd63e-is9jwUvJ-Rjxf50VlZC3EPob5f5sSgYcnj3s8sXrJf2elGYseHHOqtGcNANiM_UccWQ';

export const HERITAGE_CARDS: HeritageCardItem[] = [
  {
    id: 'tri-am',
    anchorId: 'the-dan-tri-am',
    categoryLabel: 'Thẻ Đàn',
    title: '“Tri Âm”',
    artForm: 'Đờn ca tài tử',
    summary:
      'Di sản văn hóa phi vật thể của nhân loại mang đậm tính ngẫu hứng miệt vườn qua tiếng đờn kìm, đờn tranh và bài ca mộc mạc.',
    blessing:
      'Chúc bạn sớm gặp được người tri âm đồng điệu, tâm hồn luôn rộng mở và an nhiên như tiếng đờn bên dòng sông hiền hòa.',
    frontImage: '/assets/aistudio/Trang_3_d___n_d2fe96ed.png',
    theme: {
      frontBorder: 'border-[#8bc34a]/70',
      frontBg: 'bg-[#eef7e6]',
      backGradient: 'bg-gradient-to-b from-[#f1f8e9] to-[#dcedc8]',
      backBorder: 'border-[#7cb342]',
      categoryText: 'text-[#33691e]',
      titleText: 'text-[#1b5e20]',
      subtitleText: 'text-[#33691e]',
      buttonBg: 'bg-[#558b2f] hover:bg-[#33691e]',
      buttonText: 'text-white',
      accentHex: '#558b2f',
    },
  },
  {
    id: 'tinh-quan',
    anchorId: 'the-ca-tinh-quan',
    categoryLabel: 'Thẻ Ca',
    title: '“Tình Quân”',
    artForm: 'Vọng cổ phương Nam',
    summary:
      'Khúc ca tâm tình khởi nguồn từ bản Dạ cổ hoài lang (1919) của cố nhạc sĩ Cao Văn Lầu, kết tinh tiếng lòng thổn thức thủy chung miền sông nước.',
    blessing:
      'Chúc những thương yêu trong lòng bạn luôn son sắt, sâu lắng và ngọt ngào ngân xa như nhịp vọng cổ 32.',
    frontImage: '/assets/aistudio/Trang_3_d___n__2__77303b42.png',
    theme: {
      frontBorder: 'border-[#f06292]/70',
      frontBg: 'bg-[#fdebf3]',
      backGradient: 'bg-gradient-to-b from-[#fce4ec] to-[#f8bbd0]',
      backBorder: 'border-[#e91e63]',
      categoryText: 'text-[#880e4f]',
      titleText: 'text-[#ad1457]',
      subtitleText: 'text-[#880e4f]',
      buttonBg: 'bg-[#e91e63] hover:bg-[#c2185b]',
      buttonText: 'text-white',
      accentHex: '#e91e63',
    },
  },
  {
    id: 'nguyen-cau',
    anchorId: 'the-mua-nguyen-cau',
    categoryLabel: 'Thẻ Múa',
    title: '“Nguyện Cầu”',
    artForm: 'Múa Bóng rỗi',
    summary:
      'Nghi thức dâng bông thăng bằng mâm vàng độc đáo, biểu trưng cho lòng thành kính thần linh cầu cho mưa thuận gió hòa, hào sảng phương Nam.',
    blessing:
      'Chúc mọi ước nguyện của bạn đều thành tựu vẹn tròn, cuộc sống bình an, sung túc và rạng rỡ như ánh mâm vàng dâng Mẫu.',
    frontImage: '/assets/aistudio/Trang_3_d___n__3__7d85aa58.png',
    theme: {
      frontBorder: 'border-[#fbc02d]/80',
      frontBg: 'bg-[#fffde7]',
      backGradient: 'bg-gradient-to-b from-[#fffde7] to-[#fff59d]',
      backBorder: 'border-[#fbc02d]',
      categoryText: 'text-[#8a4d00]',
      titleText: 'text-[#b45309]',
      subtitleText: 'text-[#b45309]',
      buttonBg: 'bg-[#fbc02d] hover:bg-[#f59e0b]',
      buttonText: 'text-[#2c2202]',
      accentHex: '#f59e0b',
    },
  },
  {
    id: 'nghia-khi',
    anchorId: 'the-kich-nghia-khi',
    categoryLabel: 'Thẻ Kịch',
    title: '“Nghĩa Khí”',
    artForm: 'Hát bội Nam Bộ',
    summary:
      'Sân khấu ước lệ hào hùng, phân định trung - nịnh qua mật mã vẽ mặt trang điểm và vũ đạo trượng phu mẫu mực từng được hoàng gia bảo trợ.',
    blessing:
      'Chúc bạn luôn giữ trọn khí phách kiên cường, bản lĩnh thẳng ngay và trái tim nghĩa tình trên mọi hành trình phía trước.',
    frontImage: '/assets/aistudio/Trang_3_d___n__4__f2213eaf.png',
    theme: {
      frontBorder: 'border-[#8d6e63]/70',
      frontBg: 'bg-[#efebe9]',
      backGradient: 'bg-gradient-to-b from-[#efebe9] to-[#d7ccc8]',
      backBorder: 'border-[#6d4c41]',
      categoryText: 'text-[#4e342e]',
      titleText: 'text-[#3e2723]',
      subtitleText: 'text-[#4e342e]',
      buttonBg: 'bg-[#5d4037] hover:bg-[#3e2723]',
      buttonText: 'text-white',
      accentHex: '#5d4037',
    },
  },
];

export const HERITAGE_PILLARS: HeritagePillarItem[] = [
  {
    id: 'the-dan-tri-am',
    cardLabel: 'Thẻ Đàn',
    title: '" Tri Âm "',
    tag: 'ÂM NHẠC TRUYỀN THỐNG',
    artName: 'Đờn ca tài tử',
    artDescription: {
      prefix: 'Là di sản văn hóa ',
      highlight: 'phi vật thể',
      suffix:
        ' đại diện của nhân loại, mang đậm tính ngẫu hứng qua sự kết hợp giữa âm nhạc (đàn kìm, đàn tranh, đàn cò, guitar phím lõm) và ca hát, gắn liền với đời sống miệt vườn và sinh hoạt cộng đồng.',
    },
    historyTitle: 'Quá trình hình thành',
    historyBody:
      'Ra đời vào cuối thế kỷ 19 từ sự giao thoa giữa Nhã nhạc cung đình Huế và âm nhạc dân gian Nam Bộ. Loại hình này được ba đại nhạc sư Nguyễn Quang Đại, Trần Quang Quờn và Lê Tài Khị mang vào phương Nam khai phá, canh tân và phát triển.',
    historyHighlights: ['cuối thế kỷ 19', 'Nguyễn Quang Đại, Trần Quang Quờn', 'Lê Tài Khị'],
    signatureTitle: 'Hơi',
    signatureBody: 'Là linh hồn ký thác trọn vẹn mọi rung cảm của cõi lòng:',
    signatureSubline: 'Hơi Bắc - Hơi Nam - Hơi Oán - Hơi Hạ',
    image: '/assets/aistudio/__n_ca_t_i_t__a8f31b2b.jpg',
    imageAlt: 'Nghệ nhân đờn ca tài tử biểu diễn đàn kìm và đàn tranh trong nhà gỗ Nam Bộ',
    imageCaption: 'Không gian diễn xướng Đờn ca tài tử với đờn kìm và đờn tranh',
    imageFocusClass: 'object-center',
    theme: 'dan',
  },
  {
    id: 'the-ca-tinh-quan',
    cardLabel: 'Thẻ Ca',
    title: '" Tình Quân "',
    tag: 'ĐIỆU VỌNG CỔ SÔNG NƯỚC',
    artName: 'Vọng cổ',
    artDescription: {
      prefix: 'Là thể điệu cốt lõi, được ví như ',
      highlight: '"bài ca vua"',
      suffix:
        ' của đờn ca tài tử và sân khấu cải lương. Giai điệu mang âm hưởng sâu lắng, truyền tải tình nghĩa thủy chung, son sắt của người dân miền sông nước.',
    },
    historyTitle: 'Quá trình hình thành',
    historyBody:
      'Khởi nguồn từ tác phẩm "Dạ cổ hoài lang" do cố nhạc sĩ Cao Văn Lầu sáng tác năm 1919 tại Bạc Liêu. Trải qua thời gian, điệu nhạc được mở nhịp dần (từ nhịp 2 lên 4, 8, 16 và đạt đỉnh cao ở nhịp 32) để mở rộng không gian cho nghệ sĩ tự do biểu đạt cảm xúc, nhấn nhá.',
    historyHighlights: ['"Dạ cổ hoài lang"'],
    signatureTitle: 'Nhịp',
    signatureBody:
      'Để trở thành một khúc ca dài hơi, luyến láy và dạt dào cảm xúc như hôm nay, bản vọng cổ đã trải qua một hành trình kéo dài khuôn nhạc từng bước rất thú vị.',
    image: '/assets/aistudio/d__c__335ac4c8.jpg',
    imageAlt: 'Tư liệu lịch sử nghệ nhân Nam Bộ ôm đàn kìm diễn xướng vọng cổ',
    imageCaption: 'Tư liệu xưa Nam Kỳ – Người nghệ sĩ với cây đàn kìm bên điệu Dạ cổ hoài lang',
    imageFocusClass: 'object-top',
    theme: 'ca',
  },
  {
    id: 'the-mua-nguyen-cau',
    cardLabel: 'Thẻ Múa',
    title: '" Nguyện Cầu "',
    tag: 'MÚA BÓNG RỖI & TÍN NGƯỠNG',
    artName: 'Múa Bóng rỗi',
    artDescription: {
      prefix: 'Là loại hình ',
      highlight: 'diễn xướng kết hợp',
      suffix:
        ' giữa hát, nhạc lễ và các điệu múa đòi hỏi sự khéo léo, thường xuất hiện trong các lễ hội dân gian như vía Bà Chúa Xứ, thờ Ngũ Hành Nương Nương.',
    },
    historyTitle: 'Quá trình hình thành',
    historyBody:
      'Hình thành từ quá trình giao lưu văn hóa Việt – Chăm, gắn liền mật thiết với tín ngưỡng thờ Mẫu. Các điệu múa dâng bông, dâng lộc được sáng tạo như một hình thức cầu nguyện thần linh ban cho mùa màng thuận hòa, bình an và sung túc.',
    historyHighlights: ['giao lưu văn hóa Việt – Chăm'],
    signatureTitle: 'Mâm vàng',
    signatureBody:
      'Là lễ vật trang trọng trong tín ngưỡng dân gian Nam Bộ, gắn liền với nghệ thuật múa bóng rỗi độc đáo của các nghệ nhân phương Nam.',
    image: '/assets/aistudio/muasuas_m_m_3ec864f3.jpg',
    imageAlt: 'Điệu Múa Bóng Rỗi đội Mâm Vàng rực rỡ sắc đỏ truyền thống',
    imageCaption: 'Nghệ thuật đội Mâm vàng trong nghi thức diễn xướng Múa Bóng rỗi',
    imageFocusClass: 'object-top',
    theme: 'mua',
  },
  {
    id: 'the-kich-nghia-khi',
    cardLabel: 'Thẻ Kịch',
    title: '" Nghĩa Khí "',
    tag: 'SÂN KHẤU TUỒNG CỔ',
    artName: 'Hát bội',
    artDescription: {
      prefix: 'Nghệ thuật sân khấu ',
      highlight: 'cổ truyền',
      suffix:
        ' mang tính ước lệ cao, là sự tổng hòa của văn học, âm nhạc, vũ đạo, võ thuật và nghệ thuật ',
      highlightSecond: 'hóa trang mặt nạ',
      suffixSecond:
        ' mang tính biểu tượng (mặt đỏ tượng trưng cho trung thần, mặt trắng là gian thần).',
    },
    historyTitle: 'Quá trình hình thành',
    historyBody:
      'Phát triển rực rỡ và đạt đến đỉnh cao dưới triều Nguyễn, được xem là quốc túy bảo trợ bởi hoàng gia. Hát bội được nâng tầm nghệ thuật sâu sắc cả về kịch bản lẫn biểu diễn nhờ công lao to lớn của danh nhân Đào Tấn – người được tôn là hậu tổ của nghề.',
    historyHighlights: ['quốc túy bảo trợ bởi hoàng gia', 'Đào Tấn'],
    signatureTitle: 'Mặt nạ',
    signatureBody:
      'Màu sắc mặt nạ trong cải lương tuồng cổ là "bản lý lịch tính cách" giúp khán giả nhận diện nhanh chóng phẩm chất nhân vật. Các gam màu đỏ, trắng, đen và xanh đại diện rõ nét cho các tầng lớp trung, nịnh, bộc trực hay tà ác.',
    image: '/assets/aistudio/h_t_b_i_3b389656.jpg',
    imageAlt: 'Diễn viên Hát Bội truyền thống tuồng cổ với mũ mão và tay áo lụa trắng',
    imageCaption: 'Vũ đạo và phục trang ước lệ rực rỡ của sân khấu Hát bội Nam Bộ',
    imageFocusClass: 'object-top',
    theme: 'kich',
  },
];

export const HERITAGE_LOCATIONS: HeritageLocationItem[] = [
  {
    id: 'bac-lieu',
    orderLabel: 'Không gian di sản 01',
    name: 'Bạc Liêu',
    accentColor: 'text-[#e83e8c]',
    image: '/assets/aistudio/b_c_li_u__fbdbba25.jpg',
    imageAlt: 'Không gian di sản Bạc Liêu với cổng chùa Khmer rực rỡ và tà áo dài trắng',
    imagePosition: 'object-center',
    descriptionParts: [
      {
        text: 'Là quê hương của cố nhạc sĩ Cao Văn Lầu và bản Dạ cổ hoài lang. Nơi đây nổi bật với hơn ',
      },
      { text: '150 câu lạc bộ đờn ca tài tử', bold: true },
      {
        text: ', Khu lưu niệm nghệ thuật đặc sắc và công trình kiến trúc nổi tiếng Nhà Công tử Bạc Liêu.',
      },
    ],
  },
  {
    id: 'my-tho',
    orderLabel: 'Không gian di sản 02',
    name: 'Mỹ Tho',
    accentColor: 'text-[#558b2f]',
    image: '/assets/aistudio/m__tho_0ce6e0be.jpg',
    imageAlt: 'Xuồng ba lá xuôi dòng rạch dừa nước xanh mát tại cù lao Thới Sơn, Mỹ Tho',
    imagePosition: 'object-center',
    descriptionParts: [
      { text: 'Được xem là ' },
      { text: 'cái nôi', bold: true },
      {
        text: ' của nghệ thuật đờn ca tài tử và cải lương. Nơi đây sở hữu Rạp hát Thầy Năm Tú – rạp cải lương đầu tiên của Việt Nam và gắn liền với điểm du lịch sinh thái cù lao Thới Sơn.',
      },
    ],
  },
  {
    id: 'an-giang',
    orderLabel: 'Không gian di sản 03',
    name: 'An Giang',
    accentColor: 'text-[#d97706]',
    image: '/assets/aistudio/an_giang_a1b14bbf.jpg',
    imageAlt: 'Tượng Phật Di Lặc và quần thể tâm linh núi Cấm – An Giang giữa trời xanh',
    imagePosition: 'object-center',
    descriptionParts: [
      { text: 'Điểm đến tâm linh nổi tiếng với ' },
      { text: 'Lễ hội Vía Bà Chúa Xứ núi Sam', bold: true },
      {
        text: ', diễn ra từ ngày 22 đến 27 tháng 4 âm lịch hàng năm. Lễ hội này thu hút đông đảo khách hành hương và đã được UNESCO ghi danh là Di sản văn hóa phi vật thể.',
      },
    ],
  },
  {
    id: 'chau-doc',
    orderLabel: 'Không gian di sản 04',
    name: 'Châu Đốc',
    accentColor: 'text-[#8d6e63]',
    image: '/assets/aistudio/ch_u___c_ee773b6a.jpg',
    imageAlt: 'Nghệ nhân Múa Bóng Rỗi trình diễn thăng bằng mâm vàng tinh xảo tại Châu Đốc',
    imagePosition: 'object-center',
    descriptionParts: [
      { text: 'Màn trình diễn đỉnh cao', bold: true },
      {
        text: ' thuộc loại hình nghệ thuật dân gian Múa bóng rỗi, thường xuất hiện trong các dịp lễ hội tín ngưỡng truyền thống như lễ cúng Bà, thờ Mẫu hay thờ Ngũ Hành Nương Nương.',
      },
    ],
  },
];

export const MISS_CONTESTANTS: MissContestantItem[] = [
  {
    id: '074',
    name: 'Nguyễn Phương Anh',
    sbd: '074',
    province: 'Cà Mau',
    artAffiliation: 'Đờn ca tài tử',
    quote:
      'Gìn giữ câu hò, điệu lý phương nam trong nét duyên Nam Bộ qua hình ảnh người con gái thanh tân.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCs9RB1JRw5nMdOwj14tIlRaFou3UtCEAgazyOa7PbZbPJpblzmabqB7HIH0EpnBrvE88ngElsqQ5IYDsKEec8W-HIodBh8yxll35TWomC17uv48W1PovxvPWEgSWEqyegVBZpQNUK_-5G8Nuq-d8iBSPWvJVJSntcKNOaYmmwARtSpmlzjIC3YrP3t_usJ86C_VJclaccgLMkqQUx9LwQ_dR9IeyUI9_0rAdJgUtaayKpfmR4syJYyOQ',
  },
  {
    id: '092',
    name: 'Nguyễn Thục Anh',
    sbd: '092',
    province: 'Bến Tre',
    artAffiliation: 'Đờn ca tài tử',
    quote:
      'Điểm xao lòng nhịp đờn kìm, nguyên nét văn hóa phương Nam tỏa sáng rạng ngời.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWFAksrsICzh5XcfNNGOBeaPgcziCyN0LDPyaZ_59Ga3MjThy6-HI6nGjXPqGjVdw1tbOMcAFggevMtQdg0axKYIlPGNckf9dyGjjV5h0UlCZxFYfVpASa7BSKsS1_-PyzoEcwFDQdUy69mJb18IilHlOpZKdEifQRoPwE4lU31qDXvKEyB2Jb_XEP950jKt5jCl0QAaZ6J23F-TIsgGOxg1WValFHeCp7qNADRVIuwBNUohie9VqKlg',
  },
  {
    id: '018',
    name: 'Phạm Phương Chi',
    sbd: '018',
    province: 'Tiền Giang',
    artAffiliation: 'Múa Bóng rỗi',
    quote:
      'Vẻ đẹp thanh tao bên mâm vàng nghệ thuật, lan tỏa tình yêu di sản trong thời đại số.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDII-rTsfbVB0X5pwemM0tFc21IqTMZIwpbm-7e_9GyS5Ojz0Nub_3o9u-aEr5AxkZkpVqMmqmB2zr_AX9SVNJmOU-PfpMSrCHYWGChh6q8GgBN5DVI9XMET-KsBs2Jjj3Gq-OdZNatGSE92JH-xOw6s-SC9bSwe8AeaR_lK5nYFbwDi4gxB6rBVYAwtT3Q-FcVczxsa1Zn-3Ij1auQHXZ0wjtTuvGFU-aN02nucU6hFtudF4B1yEE2gw',
  },
  {
    id: '005',
    name: 'Bảo Hằng',
    sbd: '005',
    province: 'Cần Thơ',
    artAffiliation: 'Hát bội',
    quote:
      'Khí phách trượng phu tuồng cổ giao hòa cùng vẻ đẹp nữ tính hiện đại.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9Now5cGTHribYObE2LY7uFhu3BlvvnoHHa_QExVjRTEsPCJiaHLrnGXwbY5bcaE99LdekbAMyId04wXSszkG2X5dxlMrQHP7r-diaeFVZt5lS-tLwwB5GQDYIjEhceOZGaD6bj3XWeprir-fHEm8S-acEXeoHY6cP778LTSXAeK9rrhY3G2iELld2Q6_e-ItpenLZDY1DHwPTNeH2PMqNNUdPehNx7R2y_AEMEtollU8gZ9c75orLMw',
  },
  {
    id: '026',
    name: 'Nguyễn Gia Hân',
    sbd: '026',
    province: 'Sóc Trăng',
    artAffiliation: 'Vọng cổ',
    quote:
      'Gửi trọn tấm lòng tôn kính vào từng câu vọng cổ mang trọn hồn cốt quê hương.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0uF8QHlJJ7KFxCrDmqjo9slkYk3Fhgpfon7JNt20HjDZdk37pi3Bk9shUXpQjFvL-549cuCbnlyUf8e_EqsbdRzgcBygw_FlrVdI7PBQGFlhWn97BHbWm-b9Z0znnU5V7tAGbfr3ZkPzoJs0z9Y-NpwTmmGE5uemq7boZqKwPXpn-2EdHMhZs7dEXuDuqdvhE9w0PDGhu2Vlp1vUI7oB41g5fsiRFbZtufbZDxvuz99hAmobRAOtylQ',
  },
  {
    id: '052',
    name: 'Phương Uyên',
    sbd: '052',
    province: 'Đồng Tháp',
    artAffiliation: 'Đờn ca tài tử',
    quote:
      'Tiếp nối nhịp thở ngàn xưa qua tiếng đàn tranh réo rắt bên mạn thuyền chiều.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAYgE6wIyS5C6qRCzjhaHPom9Uqdzdy2Xobkw8pFcdBngy8iRNsg_7rmRaPvc4zkWb0Uwq2gKczauiICqpiFcs99QcWP29UB04kO-TZfHE_qFmVDbfI8uafDauj3Qp4dXyfSVtnw02tqk87ICVd5pk2smJ8bsURMcSn7XLe8wPmG5zf69lZG4wFwp3la8H7DN83F-R3ufIp4ff12gJ50TJRiPYURvxN9ZIZisjr83TkyNYdKUlgZbXfQ',
  },
  {
    id: '063',
    name: 'Nguyễn Quỳnh Anh',
    sbd: '063',
    province: 'TP. Hồ Chí Minh',
    artAffiliation: 'Vọng cổ',
    quote:
      'Khúc vọng ngân vang đưa tinh hoa Nam Bộ chạm vào trái tim thế hệ trẻ hôm nay.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAY0jLZY7EYoZZdk9GfnSupoOKTJqmNJIy25sIw9gvBqdWJiSHX7LfJDzMcTe--whPyPNpWJZ9MWA6Iq3MQgrG1ri60crqsYVa8QDsn9njdOtPpdYM4S5FaOdvUI5t_rS3OQOjK7xRbaiR6IwGQq09mv0XxYz5F3LL25tWScjeH5QV5bgeOnod_kC0wsQ8XYrX-ccB7uQ7y06PXzwmidKCBluM6YTmg91gA-mqIoREIr_embb-xVEy0wg',
  },
  {
    id: '088',
    name: 'Phạm Ngọc Anh',
    sbd: '088',
    province: 'TP. Hồ Chí Minh',
    artAffiliation: 'Hát bội',
    quote:
      'Mang nét son nét vẽ tuồng cổ hòa cùng nhiệt huyết tuổi trẻ gìn giữ di sản dân tộc.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkfmIH4X5RNVbO9Yi8ZouhTdEsxG9Yl3LVaqBDIyCu_DdCtJlDEtQjY6Tz4_xGLNv2EG9vFLcjdF3qLd91PUVw5jaAO-h3oadTYwIjejYlXSgWXD7y186WMdVeqGsjhoxDK-hLSSO7LKFh80vTBOwh9uuI78PX8Me6jTacGuw5xnaMCiBPsDcre-rD2ph_yYiM3onTWa5nNWxMAwfXuegk7tUkct_JwqaTneVFIa8kYByM5Vnfc9w9GQ',
  },
];
