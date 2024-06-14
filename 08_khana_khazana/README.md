
#### ✔Live Link: 🎈 <a href="https://nextjs-khana-khazana-nine.vercel.app/" target="_blank">link</a>


#### এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ
✓ আপনাকে হোম পেজটি SEO Friendly ভাবে বানাতে হবে এবং হোম পেজের সব কন্টেন্ট যেন সার্ভার কম্পোনেন্ট হয় সেটি নিশ্চিত করতে হবে ।

✓ লগইন এবং রেজিস্টার এর টেমপ্লেট দেয়া হয়েছে, সেটি আপনাদের Implement করতে হবে ।

✓ হোম পেজের রেসিপি কার্ড গুলোতে ক্লিক করলে সেই রেসিপি এর ডিটেইলস পেজে নিয়ে যাবে ।

✓ হোম পেজের ক্যাটেগরি গুলোতে ক্লিক করলে, আলাদা পেজে নিয়ে যাবে এবং সেখানে শুধু মাত্র সেই ক্যাটেগরি এর রেসিপি গুলো দেখাবে ।

✓ রেসিপি ডিটেইলস পেজে Favourite বাটন রয়েছে, সেখানে ক্লিক করলে সেই রেসিপি Favourite হিসেবে Save হবে । তবে শুধু Logged In অবস্থাতেই Favourite বাটন কাজ করবে । এক্ষেত্রে Users Collection এ Favourite রেসিপি এর ID গুলো String আকারে রাখতে হবে। অনেকটা এভাবে -

[
  {
    // ... Other Properties of user
    "favourites": ["66233de62d53857e7cedc656"]
  }
]
✓ রেসিপি ডিটেইলস পেজে শেয়ার বাটনে ক্লিক করে রেসিপি বিভিন্ন Social Media তে শেয়ার করতে পারবে ।

✓ রেসিপি ডিটেইলস পেজে এর Meta Deta গুলো সঠিক ভাবে আপডেট করতে হবে ।

✓ আপনাদের কিছু sample data দিয়ে দেয়া হয়েছে dist/data ফোল্ডারে । এই sample data structure ফলো করে আপনারা Mongoose এবং MongoDB ব্যবহার করে ডেটাবেজ সম্পর্কিত সকল কাজ গুলো করবেন ঠিক যেভাবে মডিউলে দেখানো হয়েছে । এখানে কিছু বিষয় খুবই গুরুত্বপূর্ণ - আপনাদের ডেটাবেজ এর নাম হতে হবে "khanaKhazana" । Collection এর নাম হতে হবে "recipes" এবং ইউজার ডেটা রাখার জন্যে ইউজার এর কালেকশন এর নাম হতে হবে "users" ।

✓ MongoDB ডাটাবেস অবশ্যই Mongo Atlas এ হোস্ট করতে হবে ঠিক যেভাবে আপনাদেরকে মডিউলে দেখিয়ে দেয়া হয়েছে। আপনি লোকাল মেশিনে MongoDB ইন্সটল করে লোকাল কানেকশন ইউজ করলে আমাদের কাছে গ্রহণযোগ্য হবেনা। ডাটাবেস কানেকশন ডিটেইলস অবশ্যই .env ফাইলে রাখবেন এবং অবশ্যই অবশ্যই এই .env ফাইল .gitignore থেকে সরিয়ে দিবেন যেন আমরা যখন আপনার প্রজেক্ট রিভিউ করবো, তখন যেন .env ফাইলের কানেকশন ডিটেইলস দেখতে পাই এবং রান করে দেখতে পারি। এর ব্যতিক্রম হলে আপনি এসাইনমেন্টে মার্ক পাবেন না।

✓ Not Found এবং Error পেজ ঠিক ভাবে হ্যান্ডেল করতে হবে ।