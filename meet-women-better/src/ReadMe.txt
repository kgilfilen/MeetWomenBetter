Add libs: 
-react-router-dom

prerequisites:
-git
-npm/npx
-node
-python 3x

Setup:
1. load prerequisites
2. set up git so you can clone a repo, and clone from main
3. go to dir with package.json and run 'npm install'
4. npm start should run on this machine
5. with another terminal, go to dir with backend and run 'python MWBRest.py'
6. point browser to 'this machine' at port 3000 (e.g. localhost:3000)

User experience:
1. user logs in, or changes password, or creates account, probably using Firebase for accounts and auth.
2. User subscribes with monthly recurring payments, probably using Stripe for all.
3. Once a month is paid, each weekly lesson/challenge/log/introspection activity is available to read/write.
4. User can read lessons/challenges, and write log/introspection on the responsive web page.

Architecture:
1. website and backend/postgres on AWS for storing lessons and challenges, and if they chose, for 
subscribers to store their logs and introspection
2. all will be "in the wild" and needs good security practices, even though there should be almost 
no sensitive info, except maybe logs. But no credit cards, passwords, etc.
