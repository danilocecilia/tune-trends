import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';
import * as Realm from 'realm-web';

const realmAppId = process.env.REALM_APP_ID;
const apiKey = process.env.REALM_API_KEY;

export default async function callback(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  try {
    // Use the Realm app client to authenticate the user
    const app = new Realm.App({ id: realmAppId });
    // Log in user using realm API key
    const credentials = Realm.Credentials.apiKey(apiKey);

    // Log in user using realm API key
    const user = await app.logIn(credentials);

    // Connect to database
    const mongo = user.mongoClient('mongodb-atlas');

    // Create a new document in the "testCol" collection
    const usersCollection = mongo.db('tune-trends-db').collection('users');

    // Define the query to retrieve a document
    const query = { email: session?.user?.email };

    // Use findOne to retrieve a single document
    usersCollection.findOne(query).then((doc) => {
      if (doc === null) {
        console.log('No document found');

        console.log('Inserting first document');
        usersCollection.insertOne(session?.user).then((result) => {
          console.log('result: ', result);
        });
        return;
      } else {
        console.log('Document found: ', doc);
        return;
      }
    });

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
  }
}
