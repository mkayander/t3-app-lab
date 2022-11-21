import type CustomScalars from "../scalars";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  EnvInfo: CustomScalars.EnvInfo;
  MetaData: CustomScalars.MetaData;
  QuestionStats: CustomScalars.QuestionStats;
  SimilarQuestions: CustomScalars.SimilarQuestions;
};

export type ActiveDailyCodingChallengeQuestion = {
  __typename?: "ActiveDailyCodingChallengeQuestion";
  date: Scalars["String"];
  link: Scalars["String"];
  question: Question;
  userStatus: UserStatus;
};

export type Article = {
  __typename?: "Article";
  canSeeDetail: Scalars["Boolean"];
  hasVideoSolution: Scalars["Boolean"];
  id: Scalars["Int"];
  paidOnly: Scalars["Boolean"];
  paidOnlyVideo: Scalars["Boolean"];
};

export type ChallengeQuestion = {
  __typename?: "ChallengeQuestion";
  date: Scalars["String"];
  id: Scalars["Int"];
  incompleteChallengeCount: Scalars["Int"];
  streakCount: Scalars["Int"];
  type: ChallengeType;
};

export enum ChallengeType {
  Daily = "DAILY",
}

export type CodeSnippet = {
  __typename?: "CodeSnippet";
  code: Scalars["String"];
  lang: Scalars["String"];
  langSlug: Scalars["String"];
};

export enum Difficulty {
  All = "All",
  Easy = "Easy",
  Hard = "Hard",
  Medium = "Medium",
}

export enum JudgeType {
  Large = "large",
}

export type Me = {
  __typename?: "Me";
  activeSessionId: Scalars["Int"];
  avatar?: Maybe<Scalars["String"]>;
  isAdmin?: Maybe<Scalars["Boolean"]>;
  isMockUser?: Maybe<Scalars["Boolean"]>;
  isPremium?: Maybe<Scalars["Boolean"]>;
  isSignedIn?: Maybe<Scalars["Boolean"]>;
  isSuperuser?: Maybe<Scalars["Boolean"]>;
  isTranslator?: Maybe<Scalars["Boolean"]>;
  isVerified?: Maybe<Scalars["Boolean"]>;
  notificationStatus?: Maybe<NotificationStatus>;
  permissions: Array<Maybe<Scalars["String"]>>;
  userId?: Maybe<Scalars["Int"]>;
  username: Scalars["String"];
};

export type NotificationStatus = {
  __typename?: "NotificationStatus";
  lastModified: Scalars["Int"];
  numUnread: Scalars["Int"];
};

export type Profile = {
  __typename?: "Profile";
  ranking?: Maybe<Scalars["Int"]>;
  reputation?: Maybe<Scalars["Int"]>;
  starRating?: Maybe<Scalars["Int"]>;
  userAvatar?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  activeDailyCodingChallengeQuestion: ActiveDailyCodingChallengeQuestion;
  allQuestionsCount: Array<QuestionCount>;
  matchedUser: User;
  question: Question;
  userStatus: Me;
};

export type QueryMatchedUserArgs = {
  username?: InputMaybe<Scalars["String"]>;
};

export type QueryQuestionArgs = {
  titleSlug?: InputMaybe<Scalars["String"]>;
};

export type Question = {
  __typename?: "Question";
  acRate: Scalars["Float"];
  adminUrl?: Maybe<Scalars["String"]>;
  boundTopicId?: Maybe<Scalars["Int"]>;
  categoryTitle: Scalars["String"];
  challengeQuestion: ChallengeQuestion;
  codeSnippets: Array<CodeSnippet>;
  companyTagStats?: Maybe<Scalars["String"]>;
  content: Scalars["String"];
  contributors: Array<User>;
  difficulty: Difficulty;
  dislikes: Scalars["Int"];
  enableDebugger: Scalars["Boolean"];
  enableRunCode: Scalars["Boolean"];
  enableTestMode: Scalars["Boolean"];
  envInfo: Scalars["EnvInfo"];
  exampleTestcases: Scalars["String"];
  freqBar?: Maybe<Scalars["Int"]>;
  hasSolution: Scalars["Boolean"];
  hasVideoSolution: Scalars["Boolean"];
  hints: Array<Scalars["String"]>;
  isFavor: Scalars["Boolean"];
  isLiked?: Maybe<Scalars["Boolean"]>;
  isPaidOnly: Scalars["Boolean"];
  judgeType: JudgeType;
  judgerAvailable: Scalars["Boolean"];
  libraryUrl?: Maybe<Scalars["String"]>;
  likes: Scalars["Int"];
  metaData: Scalars["MetaData"];
  mysqlSchemas: Array<Scalars["String"]>;
  questionFrontendId: Scalars["Int"];
  questionId: Scalars["Int"];
  sampleTestCase: Scalars["String"];
  similarQuestions: Array<Scalars["SimilarQuestions"]>;
  solution: Article;
  stats: Scalars["QuestionStats"];
  status?: Maybe<QuestionStatus>;
  title: Scalars["String"];
  titleSlug: Scalars["String"];
  topicTags: Array<TopicTag>;
  translatedContent?: Maybe<Scalars["String"]>;
  translatedTitle?: Maybe<Scalars["String"]>;
};

export type QuestionCount = Stats & {
  __typename?: "QuestionCount";
  count: Scalars["Int"];
  difficulty: Difficulty;
};

export enum QuestionStatus {
  Ac = "ac",
}

export type Stats = {
  count: Scalars["Int"];
  difficulty: Difficulty;
};

export type SubmissionNum = Stats & {
  __typename?: "SubmissionNum";
  count: Scalars["Int"];
  difficulty: Difficulty;
  submissions: Scalars["Int"];
};

export type SubmitStats = {
  __typename?: "SubmitStats";
  acSubmissionNum: Array<SubmissionNum>;
  totalSubmissionNum: Array<SubmissionNum>;
};

export type TopicTag = {
  __typename?: "TopicTag";
  id: Scalars["String"];
  name: Scalars["String"];
  slug: Scalars["String"];
  translatedName?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  avatarUrl?: Maybe<Scalars["String"]>;
  profile: Profile;
  profileUrl?: Maybe<Scalars["String"]>;
  submitStats: SubmitStats;
  username: Scalars["String"];
};

export enum UserStatus {
  NotStart = "NotStart",
}

export type QuestionDataQueryVariables = Exact<{
  titleSlug: Scalars["String"];
}>;

export type QuestionDataQuery = { __typename?: "Query" } & {
  question: { __typename: "Question" } & Pick<
    Question,
    | "questionId"
    | "questionFrontendId"
    | "boundTopicId"
    | "title"
    | "titleSlug"
    | "content"
    | "translatedTitle"
    | "translatedContent"
    | "isPaidOnly"
    | "difficulty"
    | "likes"
    | "dislikes"
    | "isLiked"
    | "similarQuestions"
    | "exampleTestcases"
    | "categoryTitle"
    | "companyTagStats"
    | "stats"
    | "hints"
    | "status"
    | "sampleTestCase"
    | "metaData"
    | "judgerAvailable"
    | "judgeType"
    | "mysqlSchemas"
    | "enableRunCode"
    | "enableTestMode"
    | "enableDebugger"
    | "envInfo"
    | "libraryUrl"
    | "adminUrl"
  > & {
      contributors: Array<
        { __typename: "User" } & Pick<
          User,
          "username" | "profileUrl" | "avatarUrl"
        >
      >;
      topicTags: Array<
        { __typename: "TopicTag" } & Pick<
          TopicTag,
          "name" | "slug" | "translatedName"
        >
      >;
      codeSnippets: Array<
        { __typename: "CodeSnippet" } & Pick<
          CodeSnippet,
          "lang" | "langSlug" | "code"
        >
      >;
      solution: { __typename: "Article" } & Pick<
        Article,
        | "id"
        | "canSeeDetail"
        | "paidOnly"
        | "hasVideoSolution"
        | "paidOnlyVideo"
      >;
      challengeQuestion: { __typename: "ChallengeQuestion" } & Pick<
        ChallengeQuestion,
        "id" | "date" | "incompleteChallengeCount" | "streakCount" | "type"
      >;
    };
};

export type QuestionOfTodayQueryVariables = Exact<{ [key: string]: never }>;

export type QuestionOfTodayQuery = { __typename?: "Query" } & {
  activeDailyCodingChallengeQuestion: {
    __typename?: "ActiveDailyCodingChallengeQuestion";
  } & Pick<
    ActiveDailyCodingChallengeQuestion,
    "date" | "userStatus" | "link"
  > & {
      question: { __typename?: "Question" } & Pick<
        Question,
        | "acRate"
        | "difficulty"
        | "freqBar"
        | "isFavor"
        | "status"
        | "title"
        | "titleSlug"
        | "hasVideoSolution"
        | "hasSolution"
      > & {
          frontendQuestionId: Question["questionFrontendId"];
          paidOnly: Question["isPaidOnly"];
        } & {
          topicTags: Array<
            { __typename?: "TopicTag" } & Pick<TopicTag, "name" | "id" | "slug">
          >;
        };
    };
};

export type GetUserProfileQueryVariables = Exact<{
  username: Scalars["String"];
}>;

export type GetUserProfileQuery = { __typename?: "Query" } & {
  allQuestionsCount: Array<
    { __typename?: "QuestionCount" } & Pick<
      QuestionCount,
      "difficulty" | "count"
    >
  >;
  matchedUser: { __typename?: "User" } & {
    submitStats: { __typename?: "SubmitStats" } & {
      acSubmissionNum: Array<
        { __typename?: "SubmissionNum" } & Pick<
          SubmissionNum,
          "difficulty" | "count" | "submissions"
        >
      >;
      totalSubmissionNum: Array<
        { __typename?: "SubmissionNum" } & Pick<
          SubmissionNum,
          "difficulty" | "count" | "submissions"
        >
      >;
    };
    profile: { __typename?: "Profile" } & Pick<
      Profile,
      "ranking" | "reputation" | "starRating" | "userAvatar"
    >;
  };
};

export type GlobalDataQueryVariables = Exact<{ [key: string]: never }>;

export type GlobalDataQuery = { __typename?: "Query" } & {
  userStatus: { __typename?: "Me" } & Pick<
    Me,
    | "userId"
    | "isSignedIn"
    | "isMockUser"
    | "isPremium"
    | "isVerified"
    | "username"
    | "avatar"
    | "isAdmin"
    | "isSuperuser"
    | "permissions"
    | "isTranslator"
    | "activeSessionId"
  > & {
      notificationStatus?: Maybe<
        { __typename?: "NotificationStatus" } & Pick<
          NotificationStatus,
          "lastModified" | "numUnread"
        >
      >;
    };
};

export const QuestionDataDocument = gql`
  query questionData($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      questionFrontendId
      boundTopicId
      title
      titleSlug
      content
      translatedTitle
      translatedContent
      isPaidOnly
      difficulty
      likes
      dislikes
      isLiked
      similarQuestions
      exampleTestcases
      categoryTitle
      contributors {
        username
        profileUrl
        avatarUrl
        __typename
      }
      topicTags {
        name
        slug
        translatedName
        __typename
      }
      companyTagStats
      codeSnippets {
        lang
        langSlug
        code
        __typename
      }
      stats
      hints
      solution {
        id
        canSeeDetail
        paidOnly
        hasVideoSolution
        paidOnlyVideo
        __typename
      }
      status
      sampleTestCase
      metaData
      judgerAvailable
      judgeType
      mysqlSchemas
      enableRunCode
      enableTestMode
      enableDebugger
      envInfo
      libraryUrl
      adminUrl
      challengeQuestion {
        id
        date
        incompleteChallengeCount
        streakCount
        type
        __typename
      }
      __typename
    }
  }
`;

/**
 * __useQuestionDataQuery__
 *
 * To run a query within a React component, call `useQuestionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionDataQuery({
 *   variables: {
 *      titleSlug: // value for 'titleSlug'
 *   },
 * });
 */
export function useQuestionDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    QuestionDataQuery,
    QuestionDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<QuestionDataQuery, QuestionDataQueryVariables>(
    QuestionDataDocument,
    options
  );
}
export function useQuestionDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QuestionDataQuery,
    QuestionDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<QuestionDataQuery, QuestionDataQueryVariables>(
    QuestionDataDocument,
    options
  );
}
export type QuestionDataQueryHookResult = ReturnType<
  typeof useQuestionDataQuery
>;
export type QuestionDataLazyQueryHookResult = ReturnType<
  typeof useQuestionDataLazyQuery
>;
export type QuestionDataQueryResult = Apollo.QueryResult<
  QuestionDataQuery,
  QuestionDataQueryVariables
>;
export const QuestionOfTodayDocument = gql`
  query questionOfToday {
    activeDailyCodingChallengeQuestion {
      date
      userStatus
      link
      question {
        acRate
        difficulty
        freqBar
        frontendQuestionId: questionFrontendId
        isFavor
        paidOnly: isPaidOnly
        status
        title
        titleSlug
        hasVideoSolution
        hasSolution
        topicTags {
          name
          id
          slug
        }
      }
    }
  }
`;

/**
 * __useQuestionOfTodayQuery__
 *
 * To run a query within a React component, call `useQuestionOfTodayQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionOfTodayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionOfTodayQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuestionOfTodayQuery(
  baseOptions?: Apollo.QueryHookOptions<
    QuestionOfTodayQuery,
    QuestionOfTodayQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<QuestionOfTodayQuery, QuestionOfTodayQueryVariables>(
    QuestionOfTodayDocument,
    options
  );
}
export function useQuestionOfTodayLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QuestionOfTodayQuery,
    QuestionOfTodayQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    QuestionOfTodayQuery,
    QuestionOfTodayQueryVariables
  >(QuestionOfTodayDocument, options);
}
export type QuestionOfTodayQueryHookResult = ReturnType<
  typeof useQuestionOfTodayQuery
>;
export type QuestionOfTodayLazyQueryHookResult = ReturnType<
  typeof useQuestionOfTodayLazyQuery
>;
export type QuestionOfTodayQueryResult = Apollo.QueryResult<
  QuestionOfTodayQuery,
  QuestionOfTodayQueryVariables
>;
export const GetUserProfileDocument = gql`
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
        reputation
        starRating
        userAvatar
      }
    }
  }
`;

/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserProfileQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    options
  );
}
export function useGetUserProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    options
  );
}
export type GetUserProfileQueryHookResult = ReturnType<
  typeof useGetUserProfileQuery
>;
export type GetUserProfileLazyQueryHookResult = ReturnType<
  typeof useGetUserProfileLazyQuery
>;
export type GetUserProfileQueryResult = Apollo.QueryResult<
  GetUserProfileQuery,
  GetUserProfileQueryVariables
>;
export const GlobalDataDocument = gql`
  query globalData {
    userStatus {
      userId
      isSignedIn
      isMockUser
      isPremium
      isVerified
      username
      avatar
      isAdmin
      isSuperuser
      permissions
      isTranslator
      activeSessionId
      notificationStatus {
        lastModified
        numUnread
      }
    }
  }
`;

/**
 * __useGlobalDataQuery__
 *
 * To run a query within a React component, call `useGlobalDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlobalDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GlobalDataQuery,
    GlobalDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GlobalDataQuery, GlobalDataQueryVariables>(
    GlobalDataDocument,
    options
  );
}
export function useGlobalDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GlobalDataQuery,
    GlobalDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GlobalDataQuery, GlobalDataQueryVariables>(
    GlobalDataDocument,
    options
  );
}
export type GlobalDataQueryHookResult = ReturnType<typeof useGlobalDataQuery>;
export type GlobalDataLazyQueryHookResult = ReturnType<
  typeof useGlobalDataLazyQuery
>;
export type GlobalDataQueryResult = Apollo.QueryResult<
  GlobalDataQuery,
  GlobalDataQueryVariables
>;
