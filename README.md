This project have 2 components: Backend Service(/src/.) and frontend(/web-app/src/)

Backend Service [NestJS]:

Authentication Piece:
User submits their details like name, email, etc
If server validate, we proceed next.

User Module:
Admin can create or update user.

Stores Module:
Admin can add stores
Users can view list of stores and their ratings
Store owners can view ratings for their own store

Rating Module:
Normal users can:
- Submit a rating (1–5)
- Update their rating

Store owners can:
- See their store’s average rating
- View who rated them


Frontend Sevice 
API Layer: Contains Axios setup for backend communication with token handling
Componets: Reusable UI pieces like Navbar, StoreCard, RatingStars, etc.
Pages: Main page views mapped to routes (Login, Signup, StoreList, Admin)
Types: TypeScript interfaces and enums shared across components
App: Defines the route structure using React Router
