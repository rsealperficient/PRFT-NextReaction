# Who's on the Hackathon ?

Welcome to the first ever Who's on the Hackathon App! (since the perficient hackathon 2021 started on Friday Dec 3 2021)

Our team has created this ONE OF ITS KIND (trying to sell here...) App to gather some intel on the participants. (Background verification will be an add-on :-)

Lets get Agile here!

Phase 1 - 

User Story : (He/She) would like a portal to maintain some data, skills, identity and interests of all the hackathon participants. 
The Portal should be available to authenticated users, and provide a summary of all the participants. Basic CRUD operations need be available.

Technologies - Strictly down to Earth [Next.js](https://nextjs.org), 
               Some Fluid CMS  [Sanity.io](https://www.sanity.io) and 
               Lots of Fire! [Firebase](https://firebase.google.com/). ( We will leave out the Air and Space for Phase 2 )

So here are the steps to check out Who's on the Hackathon ? ( 24/7 Customer Support is availabe at 1-555-555-5555)

#### Step 1 - Clone or Download this Repo. Both the Studio and App are in the same Repo.

#### Step 2 - Create a new file with the name *.env.local* at the root

#### Step 3 - Copy the following lines into the *.env.local* file.

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCaV3m9FgGCuk3wiL3YDpEoKXCsrzJPD70
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=hackathon-3ed61.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=hackathon-3ed61
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=hackathon-3ed61.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=624585142172
NEXT_PUBLIC_FIREBASE_APP_ID=1:624585142172:web:f1b5a31a55792af0bf6259

NEXT_PUBLIC_SANITY_PROJECT_ID=4h6j8wvz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_TOKEN=skMEjWU6r7RMkLMsXRL47cZrhLA5LAlLONOR8jmzC9sqTlFYci89d3Ri9YbWSkx7vRu7OpnCFnAsfYjxipPj7O2AjsShxN46AV1LAWgqj7E0ecEOEEarNNgoq5syBj1FUmgiB2xCaDwavwgUkqGjTxWt7Na8Cg7x6mWIUAD2pfhrtspIcK66
NEXT_PUBLIC_SANITY_API_VERSION=v1
```

#### Step 4 - Run the Sanity Studio. Studio will run at `http://localhost:3333`

```bash
npm run start:sanity
```

#### Step 5 - Install the Application in Development Mode

```bash
npm install
```

#### Step 6 - Show Time! Run the Application. The app will be running at `http://localhost:3000`

```bash
npm run dev
```

#### Step 7 - Explore! :thumbsup:

Must See in action...

1. Authentication - The Whole Shebang, Login, Logoff,Forgot anc Change Password, SignUp
2. Participants Deck -  Participants in Card Layout
3. CRUD Operations On Participants
    1. Add New Participant
    2. Delete
    3. Update Details.

#### The Video :video_camera:

https://youtu.be/ZS70nfW5RAY

