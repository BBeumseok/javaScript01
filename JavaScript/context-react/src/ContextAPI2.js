import React, { createContext, useState } from 'react';


//  1. 초기값 설정
const UserContext = createContext({
  state: {id: 'aaa', name: 'bbbb'},
  action: {
    setUser: () => {}
  }
});

//  2. Provider 컴포넌트 재정의
//  매개값의 이름은 반드시 children으로 구조 분해 할당을 해야합니다.
//  구조 분해 할당을 해야만 자식 컴포넌트에 넘겨줄 수 있음
//  {children}은 Provider로 전달되는 모든 컴포넌트를 의미함
//  useState를 이용하여 데이터를 관리

const UserProvider = ({children}) => {
  const [user, setUser] = useState({id: 'aaa', name: 'bbbb'});
  const value = {
    state: user,
    action: {setUser}
  }
  //  Provider 반환
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

//  3. 외부에서 사용 가능하도록 consumer, provider 반환
const UserConsumer = UserContext.Consumer;
export {UserProvider, UserConsumer};

export default UserContext;