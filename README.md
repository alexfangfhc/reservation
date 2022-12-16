#hiltionReservation

This repo uses meteor to implement major feather. The graphql part is a demo to show it could be integrated with meteor.
Test is not completed.
Default admin account: admin/admin
user1: 13917119080/13917119080
user2: 13988888888/13988888888
tables info could be viewed by admin

## For development in local

### Pre-requirements

- node 14+

### Setup

- install Meteor

```bash
npm install -g meteor
```
or

```bash
curl https://install.meteor.com/ | sh
```

- install npm package

```bash
npm install
```

- start the app

```bash
meteor run
```

- The app could be visited at http://localhost:3000
- Demo Graphgql could be visited at http://localhost:3002

### Running in docker

```bash
docker-compose up -d
```

- The app could be visited at http://localhost:4000
- Demo Graphgql could be visited at http://localhost:4002
