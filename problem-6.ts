{  
  // ----------------------------------------------------------------

  // Problem 6: Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }

  const myProfile: Profile = {name: "Alice", age: 25, email: "alice@example.com"};

  console.log("Problem6 Output:", updateProfile(myProfile, { age: 26 }));

  // ----------------------------------------------------------------
}