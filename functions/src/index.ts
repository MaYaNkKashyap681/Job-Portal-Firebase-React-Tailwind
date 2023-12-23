import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const sendJobPostNotification = functions.firestore
  .document('jobListings/{jobId}')
  .onCreate(async (snapshot, context) => {
    const jobPostData = snapshot.data();

    const payload = {
      notification: {
        title: 'New Job Post',
        body: `${jobPostData.company} has posted a new job: ${jobPostData.title}`,
      },
      data: {
        jobId: context.params.jobId,
      },
      topic: 'job_posts',
    };

    try {
      await admin.messaging().send(payload);
      console.log('Notification sent successfully');
      return null;
    } catch (error) {
      console.error('Error sending notification:', error);
      return null;
    }
  });
