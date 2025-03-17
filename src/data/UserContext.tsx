import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserData = {
  selectedMonth: number | null;
  selectedDay: number | null;
  selectedYear: number | null;
  dateOfBirth: string | null;
  preferredName: string | null;
  preferredHandle: string | null;
  preferredEmail: string | null;
  phoneNumber: string | null;
  termsAgreed: boolean;
  fromCountry: string | null;
  interests: { [key: string]: string[]} | {};
};

type UserContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  updateUserField: <K extends keyof UserData>(field: K, value: UserData[K]) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    selectedMonth: null,
    selectedDay: null,
    selectedYear: null,
    dateOfBirth:null,
    preferredName: null,
    preferredHandle:null,
    preferredEmail:null,
    phoneNumber:null,
    termsAgreed: false,
    fromCountry: null,
    interests:{},
  });

  // Function to update a specific field in userData
  const updateUserField = <K extends keyof UserData>(field: K, value: UserData[K]) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, updateUserField }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
