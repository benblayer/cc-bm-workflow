import React, { FC, useState } from 'react';
import { useAppLoaded, useRequest } from '@wix/yoshi-flow-bm';
import { Page, Layout, Cell, Card, Text, Input, Button } from 'wix-style-react';
import { fetchComments, addComments } from '../api/comments.api';

const Index: FC = () => {
  useAppLoaded({ auto: true });
  const { loading, error, data } = useRequest(fetchComments()); // Not working
  const [newComment, setNewComment] = useState('');
  const [currComment, setCurrComment] = useState('');
  useRequest(addComments(newComment)); // Not working

  const addNewComment = () => {
    setNewComment(newComment);
    setCurrComment('');
    setNewComment('');
  };

  if (loading) {
    return <div>Loading ...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <Page>
        <Page.Header dataHook="app-title" title={t('app.title')} />
        <Page.Content>
          <Layout>
            <Cell>
              <Card>
                <Card.Content>
                  <Text dataHook="get-started">Received data: {data}</Text>
                </Card.Content>
              </Card>
            </Cell>
            <Cell>
              <Card>
                <Card.Header title="Add a comment"></Card.Header>
                <Card.Divider></Card.Divider>
                <Card.Content>
                  <Input
                    value={currComment}
                    onChange={(e) => setCurrComment(e.target.value)}
                  ></Input>
                  <Button onClick={addNewComment}></Button>
                </Card.Content>
              </Card>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    );
  }
};

export default Index;
