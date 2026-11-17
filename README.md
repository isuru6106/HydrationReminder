# 💧 Hydration Reminder

## 👨‍💻 Developer Information

**Name:** Isuru Udeshitha

**Student Registration Number:** PS/2022/036

**Course:** Mobile Application Development

**University:** University of Kelaniya

A simple and user-friendly mobile application developed using **React Native and Expo** to help users maintain healthy hydration habits through scheduled local notifications.

## 📱 Features

- **Custom Reminder Messages** – Create personalized hydration reminder messages.
- **Custom Reminder Intervals** – Set the notification interval in minutes.
- **Local Notifications** – Receive repeating notifications even when the app is in the background.
- **Start Reminders** – Schedule recurring hydration notifications.
- **Stop Reminders** – Cancel all scheduled reminders.
- **Reminder Status** – View whether reminders are active or inactive.
- **Hydration Tips** – Learn about the benefits of drinking water.
- **About Screen** – View application and developer information.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React Native | Mobile application development |
| Expo | Development framework |
| TypeScript | Application programming |
| Expo Router | Navigation |
| Expo Notifications | Local notifications |

## 📂 Project Structure

```text
HydrationReminder/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── tips.tsx
│   │   ├── about.tsx
│   │   └── two.tsx
│   ├── _layout.tsx
│   └── modal.tsx
├── assets/
├── components/
├── constants/
├── Output_Screens/
├── package.json
├── package-lock.json
├── app.json
└── README.md
```

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/isuru6106/HydrationReminder.git
```

### 2. Navigate to the project directory

```bash
cd HydrationReminder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Expo Notifications

```bash
npx expo install expo-notifications
```

### 5. Start the application

```bash
npx expo start
```

Scan the QR code using Expo Go on your Android device.

## 🔔 Notification Functionality

The application uses Expo Notifications to schedule repeating local notifications.

Users can:
1. Enter a custom reminder message.
2. Set an interval in minutes.
3. Start the hydration reminders.
4. Receive scheduled notifications.
5. Stop reminders and cancel scheduled notifications.

Notification permissions must be granted on the device.

## 📸 Application Screenshots

Screenshots of the application are available in the `Output_Screens` directory.

## 👨‍💻 Developer

**Isuru Udeshitha**

Mobile Application Development  
University of Kelaniya

## 📄 License

This project is licensed under the MIT License.
