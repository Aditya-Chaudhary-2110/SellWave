import logo from "./logo.svg";

import {
  SiYoutube,
  SiInstagram,
  SiX,
  SiFacebook,
  SiLinkedin,
  SiPinterest,
  SiSnapchat,
  SiTwitch,
  SiDiscord,
} from "react-icons/si";

import image_1 from "./image_1.jpg";
import image_2 from "./image_2.jpg";
import image_3 from "./image_3.jpg";
import image_4 from "./image_4.jpg";
import user_profile from "./user_profile.png";

export const assets = {
  logo,
  user_profile,
};

export const socialMediaLinks = {
  youTube: "https://www.youtube.com",
  instagram: "https://www.instagram.com",
  x: "https://www.x.com",
  facebook: "https://www.facebook.com",
  linkedin: "https://www.linkedin.com",
  pinterest: "https://www.pinterest.com",
  snapchat: "https://www.snapchat.com",
  twitch: "https://www.twitch.tv",
  discord: "https://discord.gg",
};

export function getProfileLink(platform, username) {
  if (!platform || !username) return null;

  const key = platform.toLowerCase();
  const base = socialMediaLinks[key];
  if (!base) return null;

  const cleanUsername = username.startsWith("@") ? username.slice(1) : username;

  switch (key) {
    case "youtube":
      return `https://www.youtube.com/@${cleanUsername}`;

    case "linkedin":
      return `${base}/in/${cleanUsername}`;

    case "discord":
      return `https://discord.gg/${cleanUsername}`;

    default:
      return `${base}/${cleanUsername}`;
  }
}
export const platformIcons = {
  youtube: (
    <SiYoutube fill="#FF0000" className="size-10 p-2 rounded bg-[#FF000010]" />
  ),
  instagram: (
    <SiInstagram
      fill="#E4405F"
      className="size-10 p-2 rounded bg-[#E4405F10]"
    />
  ),
  x: <SiX fill="#000000" className="size-10 p-2 rounded bg-[#00000010]" />,
  facebook: (
    <SiFacebook fill="#1877F2" className="size-10 p-2 rounded bg-[#1877F210]" />
  ),
  linkedin: (
    <SiLinkedin fill="#0A66C2" className="size-10 p-2 rounded bg-[#0A66C210]" />
  ),
  pinterest: (
    <SiPinterest
      fill="#BD081C"
      className="size-10 p-2 rounded bg-[#BD081C10]"
    />
  ),
  snapchat: (
    <SiSnapchat fill="#FFFC00" className="size-10 p-2 rounded bg-[#FFFC0010]" />
  ),
  twitch: (
    <SiTwitch fill="#9146FF" className="size-10 p-2 rounded bg-[#9146FF10]" />
  ),
  discord: (
    <SiDiscord fill="#5865F2" className="size-10 p-2 rounded bg-[#5865F210]" />
  ),
};

export const dummyUsers = [
  {
    id: "user_1",
    email: "creator1@example.com",
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    createdAt: "Thu Oct 16 2025 12:52:10 GMT+0530 (India Standard Time)",
    updatedAt: "Thu Oct 16 2025 12:52:10 GMT+0530 (India Standard Time)",
  },
  {
    id: "user_2",
    email: "creator2@example.com",
    name: "Sophie Lee",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    createdAt: "Fri Nov 01 2025 09:20:15 GMT+0530 (India Standard Time)",
    updatedAt: "Fri Nov 01 2025 09:20:15 GMT+0530 (India Standard Time)",
  },
  {
    id: "user_3",
    email: "creator3@example.com",
    name: "Liam Smith",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    createdAt: "Mon Dec 08 2025 16:45:30 GMT+0530 (India Standard Time)",
    updatedAt: "Mon Dec 08 2025 16:45:30 GMT+0530 (India Standard Time)",
  },
];

export const dummyListings = [
  {
    id: "listing_1",
    ownerId: "user_1",
    title: "Travel Vlog Channel",
    platform: "YouTube",
    username: "AlexTravels",
    followers_count: 15200,
    engagement_rate: 4.5,
    monthly_views: 120000,
    niche: "Travel",
    price: 500,
    description: "A YouTube channel focused on travel vlogs and adventures.",
    verified: true,
    monetized: true,
    country: "India",
    age_range: "18-35",
    status: "active",
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: "Alex Johnson",
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: true,
    createdAt: "Thu Oct 16 2025 12:52:10 GMT+0530 (India Standard Time)",
    updatedAt: "Thu Oct 16 2025 12:52:10 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_2",
    ownerId: "user_2",
    title: "Fitness Tips & Workouts",
    platform: "Instagram",
    username: "FitWithSophie",
    followers_count: 8700,
    engagement_rate: 5.2,
    monthly_views: 45000,
    niche: "Fitness",
    price: 300,
    description: "Instagram account sharing daily workouts and fitness tips.",
    verified: false,
    monetized: true,
    country: "USA",
    age_range: "20-40",
    status: "active",
    featured: false,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: false,
    owner: "Sophie Williams",
    isCredentialSubmitted: true,
    isCredentialVerified: false,
    isCredentialChanged: true,
    createdAt: "Fri Nov 01 2025 09:20:15 GMT+0530 (India Standard Time)",
    updatedAt: "Fri Nov 01 2025 09:20:15 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_3",
    ownerId: "user_3",
    title: "Gaming Streams",
    platform: "Twitch",
    username: "LiamPlays",
    followers_count: 3400,
    engagement_rate: 6.1,
    monthly_views: 25000,
    niche: "Gaming",
    price: 400,
    description:
      "Streaming PC and console games with interactive audience engagement.",
    verified: true,
    monetized: false,
    country: "UK",
    age_range: "15-30",
    status: "active",
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: "Liam Smith",
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "Mon Dec 08 2025 16:45:30 GMT+0530 (India Standard Time)",
    updatedAt: "Mon Dec 08 2025 16:45:30 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_4",
    ownerId: "user_1",
    title: "Photography Portfolio",
    platform: "Instagram",
    username: "AlexShoots",
    followers_count: 9200,
    engagement_rate: 4.8,
    monthly_views: 60000,
    niche: "Photography",
    price: 350,
    description:
      "Professional photography portfolio showcasing travel and lifestyle shots.",
    verified: false,
    monetized: true,
    country: "India",
    age_range: "18-40",
    status: "active",
    featured: false,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: false,
    owner: "Alex Johnson",
    isCredentialSubmitted: true,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: "Thu Oct 20 2025 10:15:00 GMT+0530 (India Standard Time)",
    updatedAt: "Thu Oct 20 2025 10:15:00 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_5",
    ownerId: "user_2",
    title: "Healthy Recipes",
    platform: "Pinterest",
    username: "SophieCooks",
    followers_count: 5600,
    engagement_rate: 5.0,
    monthly_views: 32000,
    niche: "Food",
    price: 200,
    description: "Pinterest boards sharing healthy recipes and meal plans.",
    verified: false,
    monetized: false,
    country: "USA",
    age_range: "25-45",
    status: "active",
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: "Sophie Williams",
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: true,
    createdAt: "Sat Nov 10 2025 14:30:45 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Nov 10 2025 14:30:45 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_6",
    ownerId: "user_3",
    title: "Tech Reviews",
    platform: "YouTube",
    username: "LiamTech",
    followers_count: 7800,
    engagement_rate: 3.9,
    monthly_views: 90000,
    niche: "Technology",
    price: 450,
    description: "Channel reviewing latest gadgets, software, and tech trends.",
    verified: true,
    monetized: true,
    country: "UK",
    age_range: "18-35",
    status: "active",
    featured: false,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: "Liam Smith",
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "Mon Dec 15 2025 11:00:20 GMT+0530 (India Standard Time)",
    updatedAt: "Mon Dec 15 2025 11:00:20 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_7",
    ownerId: "user_1",
    title: "Lifestyle Blog",
    platform: "Facebook",
    username: "AlexLifestyle",
    followers_count: 4300,
    engagement_rate: 4.2,
    monthly_views: 22000,
    niche: "Lifestyle",
    price: 250,
    description: "Facebook page sharing lifestyle tips and travel stories.",
    verified: false,
    monetized: false,
    country: "India",
    age_range: "20-40",
    status: "active",
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: false,
    owner: "Alex Johnson",
    isCredentialSubmitted: true,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: "Wed Oct 22 2025 08:45:10 GMT+0530 (India Standard Time)",
    updatedAt: "Wed Oct 22 2025 08:45:10 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_8",
    ownerId: "user_2",
    title: "Yoga & Meditation",
    platform: "Instagram",
    username: "SophieYoga",
    followers_count: 6100,
    engagement_rate: 5.5,
    monthly_views: 40000,
    niche: "Wellness",
    price: 300,
    description: "Daily yoga routines and mindfulness practices on Instagram.",
    verified: true,
    monetized: true,
    country: "USA",
    age_range: "18-50",
    status: "active",
    featured: false,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: "Sophie Williams",
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "Tue Nov 05 2025 12:20:00 GMT+0530 (India Standard Time)",
    updatedAt: "Tue Nov 05 2025 12:20:00 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_9",
    ownerId: "user_3",
    title: "Esports Highlights",
    platform: "YouTube",
    username: "LiamEsports",
    followers_count: 9400,
    engagement_rate: 6.8,
    monthly_views: 150000,
    niche: "Gaming",
    price: 600,
    description: "Esports game highlights and tournament recaps on YouTube.",
    verified: true,
    monetized: true,
    country: "UK",
    age_range: "15-35",
    status: "active",
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: "Liam Smith",
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "Thu Dec 18 2025 15:10:50 GMT+0530 (India Standard Time)",
    updatedAt: "Thu Dec 18 2025 15:10:50 GMT+0530 (India Standard Time)",
  },
  {
    id: "listing_10",
    ownerId: "user_1",
    title: "Food Photography",
    platform: "Pinterest",
    username: "AlexFoodShots",
    followers_count: 5200,
    engagement_rate: 4.7,
    monthly_views: 28000,
    niche: "Food",
    price: 350,
    description: "Pinterest boards showcasing artistic food photography.",
    verified: false,
    monetized: true,
    country: "India",
    age_range: "18-40",
    status: "active",
    featured: false,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: false,
    owner: "Alex Johnson",
    isCredentialSubmitted: false,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: "Fri Oct 25 2025 13:25:35 GMT+0530 (India Standard Time)",
    updatedAt: "Fri Oct 25 2025 13:25:35 GMT+0530 (India Standard Time)",
  },
];

export const dummyChat = [
  {
    id: "chat_1",
    listingId: "listing_1",

    chatUserId: "user_2",
    ownerUserId: "user_1",

    listing: {
      id: "listing_1",
      title: "Travel Vlog Channel",
      status: "active",
    },

    ownerUser: {
      id: "user_1",
      name: "Alex Johnson",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },

    chatUser: {
      id: "user_2",
      name: "Sophie Lee",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },

    messages: [
      {
        id: "msg_1",
        sender_id: "user_1",
        message: "Hi, is this listing still available?",
        createdAt: "2025-01-10T10:00:00Z",
      },
      {
        id: "msg_2",
        sender_id: "user_2",
        message: "Yes, it is available.",
        createdAt: "2025-01-10T10:01:00Z",
      },
      {
        id: "msg_3",
        sender_id: "user_1",
        message: "Great, can we discuss the price?",
        createdAt: "2025-01-10T10:02:00Z",
      },
    ],

    lastMessage: "Great, can we discuss the price?",
    lastMessageSenderId: "user_2", // NOT current user
    isLastMessageRead: false, // UNREAD → BLUE
    updatedAt: "2025-01-10T10:02:00Z",
  },

  {
    id: "chat_2",
    listingId: "listing_2",

    chatUserId: "user_3",
    ownerUserId: "user_2",

    listing: {
      id: "listing_2",
      title: "Fitness Tips & Workouts",
      status: "inactive",
    },

    ownerUser: {
      id: "user_2",
      name: "Sophie Lee",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },

    chatUser: {
      id: "user_3",
      name: "Liam Smith",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },

    messages: [
      {
        id: "msg_4",
        sender_id: "user_3",
        message: "Is this account monetized?",
        createdAt: "2025-01-11T14:30:00Z",
      },
      {
        id: "msg_5",
        sender_id: "user_2",
        message: "Yes, it is monetized.",
        createdAt: "2025-01-11T14:31:00Z",
      },
    ],

    lastMessage: "Yes, it is monetized.",
    lastMessageSenderId: "user_2", // sent by current user
    isLastMessageRead: true, // READ → GRAY
    updatedAt: "2025-01-11T14:31:00Z",
  },
];

export const dummyOrders = [
  {
    id: "order_1",
    amount: 500,
    createdAt: "2025-01-20T10:30:00Z",

    listing: {
      id: "listing_1",
      title: "Travel Vlog Channel",
      platform: "YouTube",
      username: "AlexTravels",
      verified: true,
      monetized: true,
    },

    credential: {
      updatedCredential: [
        {
          name: "Email",
          type: "email",
          value: "alextravels@gmail.com",
        },
        {
          name: "Password",
          type: "password",
          value: "password123",
        },
      ],
    },
  },

  {
    id: "order_2",
    amount: 300,
    createdAt: "2025-02-05T14:15:00Z",

    listing: {
      id: "listing_2",
      title: "Fitness Tips & Workouts",
      platform: "Instagram",
      username: "FitWithSophie",
      verified: false,
      monetized: true,
    },

    credential: {
      updatedCredential: [
        {
          name: "Username",
          type: "text",
          value: "FitWithSophie",
        },
        {
          name: "Password",
          type: "password",
          value: "insta_pass_456",
        },
      ],
    },
  },

  {
    id: "order_3",
    amount: 400,
    createdAt: "2025-03-01T09:45:00Z",

    listing: {
      id: "listing_3",
      title: "Gaming Streams",
      platform: "Twitch",
      username: "LiamPlays",
      verified: true,
      monetized: false,
    },

    credential: {
      updatedCredential: [
        {
          name: "Login Email",
          type: "email",
          value: "liamplays@twitch.tv",
        },
        {
          name: "Password",
          type: "password",
          value: "twitch_secret",
        },
      ],
    },
  },
];

export const dummyWithdrawals = [
  {
    id: "withdraw_1",
    amount: 1200,
    createdAt: "2025-02-15T12:30:00Z",
    isWithdrawn: false,

    user: {
      name: "Alex Johnson",
      email: "creator1@example.com",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },

    account: [
      {
        name: "Bank Name",
        value: "HDFC Bank",
      },
      {
        name: "Account Number",
        value: "1234567890",
      },
      {
        name: "IFSC Code",
        value: "HDFC0001234",
      },
    ],
  },
];

export const dummyWithdrawalRequests = [
  {
    id: "withdraw_1",
    amount: 250,
    isWithdrawn: false,
    user: {
      name: "Alex Johnson",
      email: "alex@example.com",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "withdraw_2",
    amount: 400,
    isWithdrawn: true,
    user: {
      name: "Sophie Lee",
      email: "sophie@example.com",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  },
];
