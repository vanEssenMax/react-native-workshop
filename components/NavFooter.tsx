import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import SQLite from 'react-native-sqlite-storage';

interface Props {}
interface State {
  db: SQLite.SQLiteDatabase;
  users: Array<String>;
}



export default class NavFooter extends Component<Props, State> {

    constructor(props){
        super(props);
        SQLite.DEBUG(true);
        const db = SQLite.openDatabase(
            {
              name: 'test35.db',
              location: 'default',
              createFromLocation: '~/components/test35.db'
            },
            () => {},
            error => {
              console.log(error);
            }
          );
      
          this.state = {
            db,
            users: [],
          };
    }

    render() {
        console.log("Hello from render");
    
        if(this.state.users.length > 0){
            console.log("HELLO FROM STATE");
            console.log(this.state.users);
            return (
                <Footer><Text>{this.state.users[0]}</Text></Footer>
                
            )
        }else{
            return (
                    <Footer>
                        <FooterTab>
                            <Button active>
                                <Icon name='chatboxes' />
                                <Text>All Chats</Text>
                            </Button>
                            <Button >
                                <Icon name='md-people' />
                                <Text>Groups Chats</Text>
                            </Button>
                            <Button>
                                <Icon name='camera' />
                                <Text>QR Scanner</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
            )
        }
    }

    componentDidMount() {
        const { db } = this.state;
        console.log("Mounted");
        console.log(db);
        
        db.transaction(tx => {
            console.log(tx);
            //const bakfiets = "CREATE TABLE IF NOT EXISTS route_store( route_id TEXT PRIMARY KEY, next_receiver_id TEXT NOT NULL );";
            const bakfiets = "SELECT * FROM route_store";
          tx.executeSql(bakfiets, [], (tx, results) => {
              console.log("Hallo Allemaal");
              console.log(results.rows.item(0));
            // const rows = results.rows;
            // let users = [];
    
            // for (let i = 0; i < rows.length; i++) {
            //   users.push({
            //     ...rows.item(i),
            //   });
            // }
    
            this.setState({ users });
          });
        });
      }
    
      componentWillUnmount() {
        const { db } = this.state;
    
        db.close();
      }

}
