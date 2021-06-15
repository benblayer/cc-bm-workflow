import { method } from '@wix/yoshi-serverless';
import { NodeWorkshopScalaApp } from '@wix/ambassador-node-workshop-scala-app/rpc';

const uuid = '8dfb0ca7-df82-40cb-86b2-97849e920a08';

export const fetchComments = method(async function () {
  const commentsService = NodeWorkshopScalaApp().CommentsService();
  const response = await commentsService(this.context.aspects).fetch(uuid);
  return response;
});

export const addComments = method(async function (comment) {
  const commentsService = NodeWorkshopScalaApp().CommentsService();
  if (comment !== '') {
    await commentsService(this.context.aspects).add(uuid, comment);
  }
});
