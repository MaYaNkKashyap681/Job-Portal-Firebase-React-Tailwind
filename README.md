## Setup Instructions

Follow these steps to set up and run your project:

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager) or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/your-project.git
```

### Navigate to the Project Directory

```bash
cd your-project
```

### Install Dependencies

```bash
npm install
```

or

```bash
yarn
```

### Environment Variables

Create a `.env` file in the root of your project and add the following:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

Replace the placeholders with the actual values from your Firebase project.

### Firebase Configuration

In your Firebase configuration file (e.g., `src/firebase.js`), use environment variables like this:

```javascript
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
```

### Run the Project

```bash
npm run dev
```

or

```bash
yarn dev
```

Open your browser and go to `http://localhost:5173` to view your project.
