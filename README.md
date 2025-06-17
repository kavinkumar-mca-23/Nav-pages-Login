#he login page is designed with React Bootstrap for form handling and Framer Motion for smooth animations. It uses hardcoded demo credentials to simulate a login flow.

✅ Features
Styled with a frosted glass effect

Animated using Framer Motion

Alerts users on login success or failure

Navigates to /UserHome on successful login

Hardcoded demo credentials for testing

📋 Demo Credentials
Use the following credentials to log in:

👤 Username: kavin
🔑 Password: 1516
📧 Email: kavin15@gmail.com (for reference only)

# 📸Screenshots:
![image](https://github.com/user-attachments/assets/779c92a1-522a-41af-a5bb-f7628f4e52c9)
![image](https://github.com/user-attachments/assets/699c3eca-665a-484d-b0a2-7ec891156e64)

#web navigatiuon :
 In React, we usually handle navigation using a library like React Router.

#🚀 How React Navigation Works (React Router)
When you use React Router:

<Routes> and <Route> define which component (page) shows up for each URL path.

useNavigate() is a hook used to move (navigate) between pages programmatically (like after login).

<Link> is a component used to add clickable links to navigate between pages without reloading.

#🧭 Example from Your App:

<Route path="/login" element={<Login />} />
<Route path="/userHome" element={<UserHome />} />

#📸ScreenShots:
![image](https://github.com/user-attachments/assets/e69b9c6d-6061-4adf-99d7-556ae411554c)
![image](https://github.com/user-attachments/assets/2263c780-a792-4a9c-ab61-12c4dec096fc)



