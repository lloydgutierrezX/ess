
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Benefit
 * 
 */
export type Benefit = $Result.DefaultSelection<Prisma.$BenefitPayload>
/**
 * Model EmployeeType
 * 
 */
export type EmployeeType = $Result.DefaultSelection<Prisma.$EmployeeTypePayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model UserBasicInfo
 * 
 */
export type UserBasicInfo = $Result.DefaultSelection<Prisma.$UserBasicInfoPayload>
/**
 * Model UserEmploymentBackground
 * 
 */
export type UserEmploymentBackground = $Result.DefaultSelection<Prisma.$UserEmploymentBackgroundPayload>
/**
 * Model UserEducationalBackground
 * 
 */
export type UserEducationalBackground = $Result.DefaultSelection<Prisma.$UserEducationalBackgroundPayload>
/**
 * Model UserEmployementInfo
 * 
 */
export type UserEmployementInfo = $Result.DefaultSelection<Prisma.$UserEmployementInfoPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserBenefit
 * 
 */
export type UserBenefit = $Result.DefaultSelection<Prisma.$UserBenefitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BenefitType: {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT'
};

export type BenefitType = (typeof BenefitType)[keyof typeof BenefitType]


export const MaritalStatus: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  WIDOWED: 'WIDOWED',
  DIVORCED: 'DIVORCED'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Nationality: {
  AFGHAN: 'AFGHAN',
  ALBANIAN: 'ALBANIAN',
  ALGERIAN: 'ALGERIAN',
  AMERICAN: 'AMERICAN',
  ANDORRAN: 'ANDORRAN',
  ANGOLAN: 'ANGOLAN',
  ANTIGUAN: 'ANTIGUAN',
  ARGENTINE: 'ARGENTINE',
  ARMENIAN: 'ARMENIAN',
  AUSTRALIAN: 'AUSTRALIAN',
  AUSTRIAN: 'AUSTRIAN',
  AZERBAIJANI: 'AZERBAIJANI',
  BAHAMIAN: 'BAHAMIAN',
  BAHRAINI: 'BAHRAINI',
  BANGLADESHI: 'BANGLADESHI',
  BARBADIAN: 'BARBADIAN',
  BELARUSIAN: 'BELARUSIAN',
  BELGIAN: 'BELGIAN',
  BELIZEAN: 'BELIZEAN',
  BENINESE: 'BENINESE',
  BHUTANESE: 'BHUTANESE',
  BOLIVIAN: 'BOLIVIAN',
  BOSNIAN: 'BOSNIAN',
  BOTSWANAN: 'BOTSWANAN',
  BRAZILIAN: 'BRAZILIAN',
  BRITISH: 'BRITISH',
  BRUNEIAN: 'BRUNEIAN',
  BULGARIAN: 'BULGARIAN',
  BURKINABE: 'BURKINABE',
  BURMESE: 'BURMESE',
  BURUNDIAN: 'BURUNDIAN',
  CAMBODIAN: 'CAMBODIAN',
  CAMEROONIAN: 'CAMEROONIAN',
  CANADIAN: 'CANADIAN',
  CAPE_VERDEAN: 'CAPE_VERDEAN',
  CENTRAL_AFRICAN: 'CENTRAL_AFRICAN',
  CHADIAN: 'CHADIAN',
  CHILEAN: 'CHILEAN',
  CHINESE: 'CHINESE',
  COLOMBIAN: 'COLOMBIAN',
  COMORAN: 'COMORAN',
  CONGOLESE: 'CONGOLESE',
  COSTA_RICAN: 'COSTA_RICAN',
  CROATIAN: 'CROATIAN',
  CUBAN: 'CUBAN',
  CYPRIOT: 'CYPRIOT',
  CZECH: 'CZECH',
  DANISH: 'DANISH',
  DJIBOUTIAN: 'DJIBOUTIAN',
  DOMINICAN: 'DOMINICAN',
  DUTCH: 'DUTCH',
  EAST_TIMORESE: 'EAST_TIMORESE',
  ECUADORIAN: 'ECUADORIAN',
  EGYPTIAN: 'EGYPTIAN',
  EMIRATI: 'EMIRATI',
  ENGLISH: 'ENGLISH',
  EQUATOGUINEAN: 'EQUATOGUINEAN',
  ERITREAN: 'ERITREAN',
  ESTONIAN: 'ESTONIAN',
  ETHIOPIAN: 'ETHIOPIAN',
  FIJIAN: 'FIJIAN',
  FILIPINO: 'FILIPINO',
  FINNISH: 'FINNISH',
  FRENCH: 'FRENCH',
  GABONESE: 'GABONESE',
  GAMBIAN: 'GAMBIAN',
  GEORGIAN: 'GEORGIAN',
  GERMAN: 'GERMAN',
  GHANAIAN: 'GHANAIAN',
  GREEK: 'GREEK',
  GRENADIAN: 'GRENADIAN',
  GUATEMALAN: 'GUATEMALAN',
  GUINEAN: 'GUINEAN',
  GUINEA_BISSAUAN: 'GUINEA_BISSAUAN',
  GUYANESE: 'GUYANESE',
  HAITIAN: 'HAITIAN',
  HERZEGOVINIAN: 'HERZEGOVINIAN',
  HONDURAN: 'HONDURAN',
  HUNGARIAN: 'HUNGARIAN',
  ICELANDIC: 'ICELANDIC',
  INDIAN: 'INDIAN',
  INDONESIAN: 'INDONESIAN',
  IRANIAN: 'IRANIAN',
  IRAQI: 'IRAQI',
  IRISH: 'IRISH',
  ISRAELI: 'ISRAELI',
  ITALIAN: 'ITALIAN',
  IVORIAN: 'IVORIAN',
  JAMAICAN: 'JAMAICAN',
  JAPANESE: 'JAPANESE',
  JORDANIAN: 'JORDANIAN',
  KAZAKHSTANI: 'KAZAKHSTANI',
  KENYAN: 'KENYAN',
  KIRIBATI: 'KIRIBATI',
  KOREAN: 'KOREAN',
  KOSOVAR: 'KOSOVAR',
  KUWAITI: 'KUWAITI',
  KYRGYZ: 'KYRGYZ',
  LAOTIAN: 'LAOTIAN',
  LATVIAN: 'LATVIAN',
  LEBANESE: 'LEBANESE',
  LIBERIAN: 'LIBERIAN',
  LIBYAN: 'LIBYAN',
  LIECHTENSTEINER: 'LIECHTENSTEINER',
  LITHUANIAN: 'LITHUANIAN',
  LUXEMBOURGER: 'LUXEMBOURGER',
  MACEDONIAN: 'MACEDONIAN',
  MALAGASY: 'MALAGASY',
  MALAWIAN: 'MALAWIAN',
  MALAYSIAN: 'MALAYSIAN',
  MALDIVIAN: 'MALDIVIAN',
  MALIEN: 'MALIEN',
  MALTESE: 'MALTESE',
  MARSHALLESE: 'MARSHALLESE',
  MAURITANIAN: 'MAURITANIAN',
  MAURITIAN: 'MAURITIAN',
  MEXICAN: 'MEXICAN',
  MICRONESIAN: 'MICRONESIAN',
  MOLDOVAN: 'MOLDOVAN',
  MONACAN: 'MONACAN',
  MONGOLIAN: 'MONGOLIAN',
  MONTENEGRIN: 'MONTENEGRIN',
  MOROCCAN: 'MOROCCAN',
  MOSOTHO: 'MOSOTHO',
  MOZAMBICAN: 'MOZAMBICAN',
  NAMIBIAN: 'NAMIBIAN',
  NAURUAN: 'NAURUAN',
  NEPALESE: 'NEPALESE',
  NEW_ZEALANDER: 'NEW_ZEALANDER',
  NICARAGUAN: 'NICARAGUAN',
  NIGERIEN: 'NIGERIEN',
  NIGERIAN: 'NIGERIAN',
  NORWEGIAN: 'NORWEGIAN',
  OMANI: 'OMANI',
  PAKISTANI: 'PAKISTANI',
  PALAUAN: 'PALAUAN',
  PALESTINIAN: 'PALESTINIAN',
  PANAMANIAN: 'PANAMANIAN',
  PAPUA_NEW_GUINEAN: 'PAPUA_NEW_GUINEAN',
  PARAGUAYAN: 'PARAGUAYAN',
  PERUVIAN: 'PERUVIAN',
  POLISH: 'POLISH',
  PORTUGUESE: 'PORTUGUESE',
  QATARI: 'QATARI',
  ROMANIAN: 'ROMANIAN',
  RUSSIAN: 'RUSSIAN',
  RWANDAN: 'RWANDAN',
  SAINT_LUCIAN: 'SAINT_LUCIAN',
  SALVADORAN: 'SALVADORAN',
  SAMOAN: 'SAMOAN',
  SAN_MARINESE: 'SAN_MARINESE',
  SAO_TOMEAN: 'SAO_TOMEAN',
  SAUDI: 'SAUDI',
  SCOTTISH: 'SCOTTISH',
  SENEGALESE: 'SENEGALESE',
  SERBIAN: 'SERBIAN',
  SEYCHELLOIS: 'SEYCHELLOIS',
  SIERRA_LEONEAN: 'SIERRA_LEONEAN',
  SINGAPOREAN: 'SINGAPOREAN',
  SLOVAK: 'SLOVAK',
  SLOVENIAN: 'SLOVENIAN',
  SOLOMON_ISLANDER: 'SOLOMON_ISLANDER',
  SOMALI: 'SOMALI',
  SOUTH_AFRICAN: 'SOUTH_AFRICAN',
  SPANISH: 'SPANISH',
  SRI_LANKAN: 'SRI_LANKAN',
  SUDANESE: 'SUDANESE',
  SURINAMESE: 'SURINAMESE',
  SWAZI: 'SWAZI',
  SWEDISH: 'SWEDISH',
  SWISS: 'SWISS',
  SYRIAN: 'SYRIAN',
  TAIWANESE: 'TAIWANESE',
  TAJIK: 'TAJIK',
  TANZANIAN: 'TANZANIAN',
  THAI: 'THAI',
  TOGOLESE: 'TOGOLESE',
  TONGAN: 'TONGAN',
  TRINIDADIAN: 'TRINIDADIAN',
  TUNISIAN: 'TUNISIAN',
  TURKISH: 'TURKISH',
  TURKMEN: 'TURKMEN',
  TUVALUAN: 'TUVALUAN',
  UGANDAN: 'UGANDAN',
  UKRAINIAN: 'UKRAINIAN',
  URUGUAYAN: 'URUGUAYAN',
  UZBEK: 'UZBEK',
  VATICAN: 'VATICAN',
  VENEZUELAN: 'VENEZUELAN',
  VIETNAMESE: 'VIETNAMESE',
  WELSH: 'WELSH',
  YEMENI: 'YEMENI',
  ZAMBIAN: 'ZAMBIAN',
  ZIMBABWEAN: 'ZIMBABWEAN'
};

export type Nationality = (typeof Nationality)[keyof typeof Nationality]

}

export type BenefitType = $Enums.BenefitType

export const BenefitType: typeof $Enums.BenefitType

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Nationality = $Enums.Nationality

export const Nationality: typeof $Enums.Nationality

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Benefits
 * const benefits = await prisma.benefit.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Benefits
   * const benefits = await prisma.benefit.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.benefit`: Exposes CRUD operations for the **Benefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benefits
    * const benefits = await prisma.benefit.findMany()
    * ```
    */
  get benefit(): Prisma.BenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeType`: Exposes CRUD operations for the **EmployeeType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeTypes
    * const employeeTypes = await prisma.employeeType.findMany()
    * ```
    */
  get employeeType(): Prisma.EmployeeTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBasicInfo`: Exposes CRUD operations for the **UserBasicInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBasicInfos
    * const userBasicInfos = await prisma.userBasicInfo.findMany()
    * ```
    */
  get userBasicInfo(): Prisma.UserBasicInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userEmploymentBackground`: Exposes CRUD operations for the **UserEmploymentBackground** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserEmploymentBackgrounds
    * const userEmploymentBackgrounds = await prisma.userEmploymentBackground.findMany()
    * ```
    */
  get userEmploymentBackground(): Prisma.UserEmploymentBackgroundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userEducationalBackground`: Exposes CRUD operations for the **UserEducationalBackground** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserEducationalBackgrounds
    * const userEducationalBackgrounds = await prisma.userEducationalBackground.findMany()
    * ```
    */
  get userEducationalBackground(): Prisma.UserEducationalBackgroundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userEmployementInfo`: Exposes CRUD operations for the **UserEmployementInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserEmployementInfos
    * const userEmployementInfos = await prisma.userEmployementInfo.findMany()
    * ```
    */
  get userEmployementInfo(): Prisma.UserEmployementInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBenefit`: Exposes CRUD operations for the **UserBenefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBenefits
    * const userBenefits = await prisma.userBenefit.findMany()
    * ```
    */
  get userBenefit(): Prisma.UserBenefitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Benefit: 'Benefit',
    EmployeeType: 'EmployeeType',
    Position: 'Position',
    Task: 'Task',
    UserBasicInfo: 'UserBasicInfo',
    UserEmploymentBackground: 'UserEmploymentBackground',
    UserEducationalBackground: 'UserEducationalBackground',
    UserEmployementInfo: 'UserEmployementInfo',
    User: 'User',
    UserBenefit: 'UserBenefit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "benefit" | "employeeType" | "position" | "task" | "userBasicInfo" | "userEmploymentBackground" | "userEducationalBackground" | "userEmployementInfo" | "user" | "userBenefit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Benefit: {
        payload: Prisma.$BenefitPayload<ExtArgs>
        fields: Prisma.BenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findFirst: {
            args: Prisma.BenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findMany: {
            args: Prisma.BenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          create: {
            args: Prisma.BenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          createMany: {
            args: Prisma.BenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          delete: {
            args: Prisma.BenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          update: {
            args: Prisma.BenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          deleteMany: {
            args: Prisma.BenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          upsert: {
            args: Prisma.BenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          aggregate: {
            args: Prisma.BenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenefit>
          }
          groupBy: {
            args: Prisma.BenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenefitCountArgs<ExtArgs>
            result: $Utils.Optional<BenefitCountAggregateOutputType> | number
          }
        }
      }
      EmployeeType: {
        payload: Prisma.$EmployeeTypePayload<ExtArgs>
        fields: Prisma.EmployeeTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>
          }
          findFirst: {
            args: Prisma.EmployeeTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>
          }
          findMany: {
            args: Prisma.EmployeeTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>[]
          }
          create: {
            args: Prisma.EmployeeTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>
          }
          createMany: {
            args: Prisma.EmployeeTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>[]
          }
          delete: {
            args: Prisma.EmployeeTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>
          }
          update: {
            args: Prisma.EmployeeTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeTypePayload>
          }
          aggregate: {
            args: Prisma.EmployeeTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeType>
          }
          groupBy: {
            args: Prisma.EmployeeTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeTypeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeTypeCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      UserBasicInfo: {
        payload: Prisma.$UserBasicInfoPayload<ExtArgs>
        fields: Prisma.UserBasicInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBasicInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBasicInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>
          }
          findFirst: {
            args: Prisma.UserBasicInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBasicInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>
          }
          findMany: {
            args: Prisma.UserBasicInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>[]
          }
          create: {
            args: Prisma.UserBasicInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>
          }
          createMany: {
            args: Prisma.UserBasicInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBasicInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>[]
          }
          delete: {
            args: Prisma.UserBasicInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>
          }
          update: {
            args: Prisma.UserBasicInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserBasicInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBasicInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBasicInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>[]
          }
          upsert: {
            args: Prisma.UserBasicInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBasicInfoPayload>
          }
          aggregate: {
            args: Prisma.UserBasicInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBasicInfo>
          }
          groupBy: {
            args: Prisma.UserBasicInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBasicInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBasicInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserBasicInfoCountAggregateOutputType> | number
          }
        }
      }
      UserEmploymentBackground: {
        payload: Prisma.$UserEmploymentBackgroundPayload<ExtArgs>
        fields: Prisma.UserEmploymentBackgroundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserEmploymentBackgroundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserEmploymentBackgroundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>
          }
          findFirst: {
            args: Prisma.UserEmploymentBackgroundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserEmploymentBackgroundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>
          }
          findMany: {
            args: Prisma.UserEmploymentBackgroundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>[]
          }
          create: {
            args: Prisma.UserEmploymentBackgroundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>
          }
          createMany: {
            args: Prisma.UserEmploymentBackgroundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserEmploymentBackgroundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>[]
          }
          delete: {
            args: Prisma.UserEmploymentBackgroundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>
          }
          update: {
            args: Prisma.UserEmploymentBackgroundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>
          }
          deleteMany: {
            args: Prisma.UserEmploymentBackgroundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserEmploymentBackgroundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserEmploymentBackgroundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>[]
          }
          upsert: {
            args: Prisma.UserEmploymentBackgroundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmploymentBackgroundPayload>
          }
          aggregate: {
            args: Prisma.UserEmploymentBackgroundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserEmploymentBackground>
          }
          groupBy: {
            args: Prisma.UserEmploymentBackgroundGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserEmploymentBackgroundGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserEmploymentBackgroundCountArgs<ExtArgs>
            result: $Utils.Optional<UserEmploymentBackgroundCountAggregateOutputType> | number
          }
        }
      }
      UserEducationalBackground: {
        payload: Prisma.$UserEducationalBackgroundPayload<ExtArgs>
        fields: Prisma.UserEducationalBackgroundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserEducationalBackgroundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserEducationalBackgroundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>
          }
          findFirst: {
            args: Prisma.UserEducationalBackgroundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserEducationalBackgroundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>
          }
          findMany: {
            args: Prisma.UserEducationalBackgroundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>[]
          }
          create: {
            args: Prisma.UserEducationalBackgroundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>
          }
          createMany: {
            args: Prisma.UserEducationalBackgroundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserEducationalBackgroundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>[]
          }
          delete: {
            args: Prisma.UserEducationalBackgroundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>
          }
          update: {
            args: Prisma.UserEducationalBackgroundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>
          }
          deleteMany: {
            args: Prisma.UserEducationalBackgroundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserEducationalBackgroundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserEducationalBackgroundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>[]
          }
          upsert: {
            args: Prisma.UserEducationalBackgroundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationalBackgroundPayload>
          }
          aggregate: {
            args: Prisma.UserEducationalBackgroundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserEducationalBackground>
          }
          groupBy: {
            args: Prisma.UserEducationalBackgroundGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserEducationalBackgroundGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserEducationalBackgroundCountArgs<ExtArgs>
            result: $Utils.Optional<UserEducationalBackgroundCountAggregateOutputType> | number
          }
        }
      }
      UserEmployementInfo: {
        payload: Prisma.$UserEmployementInfoPayload<ExtArgs>
        fields: Prisma.UserEmployementInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserEmployementInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserEmployementInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>
          }
          findFirst: {
            args: Prisma.UserEmployementInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserEmployementInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>
          }
          findMany: {
            args: Prisma.UserEmployementInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>[]
          }
          create: {
            args: Prisma.UserEmployementInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>
          }
          createMany: {
            args: Prisma.UserEmployementInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserEmployementInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>[]
          }
          delete: {
            args: Prisma.UserEmployementInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>
          }
          update: {
            args: Prisma.UserEmployementInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserEmployementInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserEmployementInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserEmployementInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>[]
          }
          upsert: {
            args: Prisma.UserEmployementInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEmployementInfoPayload>
          }
          aggregate: {
            args: Prisma.UserEmployementInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserEmployementInfo>
          }
          groupBy: {
            args: Prisma.UserEmployementInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserEmployementInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserEmployementInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserEmployementInfoCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserBenefit: {
        payload: Prisma.$UserBenefitPayload<ExtArgs>
        fields: Prisma.UserBenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          findFirst: {
            args: Prisma.UserBenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          findMany: {
            args: Prisma.UserBenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>[]
          }
          create: {
            args: Prisma.UserBenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          createMany: {
            args: Prisma.UserBenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>[]
          }
          delete: {
            args: Prisma.UserBenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          update: {
            args: Prisma.UserBenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          deleteMany: {
            args: Prisma.UserBenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>[]
          }
          upsert: {
            args: Prisma.UserBenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          aggregate: {
            args: Prisma.UserBenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBenefit>
          }
          groupBy: {
            args: Prisma.UserBenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBenefitCountArgs<ExtArgs>
            result: $Utils.Optional<UserBenefitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    benefit?: BenefitOmit
    employeeType?: EmployeeTypeOmit
    position?: PositionOmit
    task?: TaskOmit
    userBasicInfo?: UserBasicInfoOmit
    userEmploymentBackground?: UserEmploymentBackgroundOmit
    userEducationalBackground?: UserEducationalBackgroundOmit
    userEmployementInfo?: UserEmployementInfoOmit
    user?: UserOmit
    userBenefit?: UserBenefitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BenefitCountOutputType
   */

  export type BenefitCountOutputType = {
    userAllowance: number
  }

  export type BenefitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAllowance?: boolean | BenefitCountOutputTypeCountUserAllowanceArgs
  }

  // Custom InputTypes
  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitCountOutputType
     */
    select?: BenefitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeCountUserAllowanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBenefitWhereInput
  }


  /**
   * Count Type EmployeeTypeCountOutputType
   */

  export type EmployeeTypeCountOutputType = {
    user: number
  }

  export type EmployeeTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmployeeTypeCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * EmployeeTypeCountOutputType without action
   */
  export type EmployeeTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeTypeCountOutputType
     */
    select?: EmployeeTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeTypeCountOutputType without action
   */
  export type EmployeeTypeCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    user: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PositionCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserBasicInfo: number
    UserEmploymentBackground: number
    UserEducationalBackground: number
    UserEmployementInfo: number
    UserBenefit: number
    EmployeeType: number
    Position: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserBasicInfo?: boolean | UserCountOutputTypeCountUserBasicInfoArgs
    UserEmploymentBackground?: boolean | UserCountOutputTypeCountUserEmploymentBackgroundArgs
    UserEducationalBackground?: boolean | UserCountOutputTypeCountUserEducationalBackgroundArgs
    UserEmployementInfo?: boolean | UserCountOutputTypeCountUserEmployementInfoArgs
    UserBenefit?: boolean | UserCountOutputTypeCountUserBenefitArgs
    EmployeeType?: boolean | UserCountOutputTypeCountEmployeeTypeArgs
    Position?: boolean | UserCountOutputTypeCountPositionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBasicInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBasicInfoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserEmploymentBackgroundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEmploymentBackgroundWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserEducationalBackgroundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEducationalBackgroundWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserEmployementInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEmployementInfoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBenefitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBenefitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeTypeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Benefit
   */

  export type AggregateBenefit = {
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  export type BenefitAvgAggregateOutputType = {
    id: number | null
  }

  export type BenefitSumAggregateOutputType = {
    id: number | null
  }

  export type BenefitMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    type: $Enums.BenefitType | null
    active: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    type: $Enums.BenefitType | null
    active: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitCountAggregateOutputType = {
    id: number
    code: number
    name: number
    type: number
    active: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BenefitAvgAggregateInputType = {
    id?: true
  }

  export type BenefitSumAggregateInputType = {
    id?: true
  }

  export type BenefitMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefit to aggregate.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benefits
    **/
    _count?: true | BenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitMaxAggregateInputType
  }

  export type GetBenefitAggregateType<T extends BenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefit[P]>
      : GetScalarType<T[P], AggregateBenefit[P]>
  }




  export type BenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitWhereInput
    orderBy?: BenefitOrderByWithAggregationInput | BenefitOrderByWithAggregationInput[]
    by: BenefitScalarFieldEnum[] | BenefitScalarFieldEnum
    having?: BenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitCountAggregateInputType | true
    _avg?: BenefitAvgAggregateInputType
    _sum?: BenefitSumAggregateInputType
    _min?: BenefitMinAggregateInputType
    _max?: BenefitMaxAggregateInputType
  }

  export type BenefitGroupByOutputType = {
    id: number
    code: string
    name: string
    type: $Enums.BenefitType
    active: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  type GetBenefitGroupByPayload<T extends BenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitGroupByOutputType[P]>
        }
      >
    >


  export type BenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAllowance?: boolean | Benefit$userAllowanceArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "type" | "active" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["benefit"]>
  export type BenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAllowance?: boolean | Benefit$userAllowanceArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Benefit"
    objects: {
      userAllowance: Prisma.$UserBenefitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      type: $Enums.BenefitType
      active: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["benefit"]>
    composites: {}
  }

  type BenefitGetPayload<S extends boolean | null | undefined | BenefitDefaultArgs> = $Result.GetResult<Prisma.$BenefitPayload, S>

  type BenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenefitCountAggregateInputType | true
    }

  export interface BenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Benefit'], meta: { name: 'Benefit' } }
    /**
     * Find zero or one Benefit that matches the filter.
     * @param {BenefitFindUniqueArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenefitFindUniqueArgs>(args: SelectSubset<T, BenefitFindUniqueArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Benefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BenefitFindUniqueOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, BenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenefitFindFirstArgs>(args?: SelectSubset<T, BenefitFindFirstArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, BenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefit.findMany()
     * 
     * // Get first 10 Benefits
     * const benefits = await prisma.benefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitWithIdOnly = await prisma.benefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenefitFindManyArgs>(args?: SelectSubset<T, BenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Benefit.
     * @param {BenefitCreateArgs} args - Arguments to create a Benefit.
     * @example
     * // Create one Benefit
     * const Benefit = await prisma.benefit.create({
     *   data: {
     *     // ... data to create a Benefit
     *   }
     * })
     * 
     */
    create<T extends BenefitCreateArgs>(args: SelectSubset<T, BenefitCreateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Benefits.
     * @param {BenefitCreateManyArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenefitCreateManyArgs>(args?: SelectSubset<T, BenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benefits and returns the data saved in the database.
     * @param {BenefitCreateManyAndReturnArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, BenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Benefit.
     * @param {BenefitDeleteArgs} args - Arguments to delete one Benefit.
     * @example
     * // Delete one Benefit
     * const Benefit = await prisma.benefit.delete({
     *   where: {
     *     // ... filter to delete one Benefit
     *   }
     * })
     * 
     */
    delete<T extends BenefitDeleteArgs>(args: SelectSubset<T, BenefitDeleteArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Benefit.
     * @param {BenefitUpdateArgs} args - Arguments to update one Benefit.
     * @example
     * // Update one Benefit
     * const benefit = await prisma.benefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenefitUpdateArgs>(args: SelectSubset<T, BenefitUpdateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Benefits.
     * @param {BenefitDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenefitDeleteManyArgs>(args?: SelectSubset<T, BenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenefitUpdateManyArgs>(args: SelectSubset<T, BenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits and returns the data updated in the database.
     * @param {BenefitUpdateManyAndReturnArgs} args - Arguments to update many Benefits.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, BenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Benefit.
     * @param {BenefitUpsertArgs} args - Arguments to update or create a Benefit.
     * @example
     * // Update or create a Benefit
     * const benefit = await prisma.benefit.upsert({
     *   create: {
     *     // ... data to create a Benefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefit we want to update
     *   }
     * })
     */
    upsert<T extends BenefitUpsertArgs>(args: SelectSubset<T, BenefitUpsertArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefit.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
    **/
    count<T extends BenefitCountArgs>(
      args?: Subset<T, BenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BenefitAggregateArgs>(args: Subset<T, BenefitAggregateArgs>): Prisma.PrismaPromise<GetBenefitAggregateType<T>>

    /**
     * Group by Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitGroupByArgs['orderBy'] }
        : { orderBy?: BenefitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Benefit model
   */
  readonly fields: BenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Benefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAllowance<T extends Benefit$userAllowanceArgs<ExtArgs> = {}>(args?: Subset<T, Benefit$userAllowanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Benefit model
   */
  interface BenefitFieldRefs {
    readonly id: FieldRef<"Benefit", 'Int'>
    readonly code: FieldRef<"Benefit", 'String'>
    readonly name: FieldRef<"Benefit", 'String'>
    readonly type: FieldRef<"Benefit", 'BenefitType'>
    readonly active: FieldRef<"Benefit", 'Boolean'>
    readonly description: FieldRef<"Benefit", 'String'>
    readonly createdAt: FieldRef<"Benefit", 'DateTime'>
    readonly updatedAt: FieldRef<"Benefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Benefit findUnique
   */
  export type BenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findUniqueOrThrow
   */
  export type BenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findFirst
   */
  export type BenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findFirstOrThrow
   */
  export type BenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findMany
   */
  export type BenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefits to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit create
   */
  export type BenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a Benefit.
     */
    data: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
  }

  /**
   * Benefit createMany
   */
  export type BenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit createManyAndReturn
   */
  export type BenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit update
   */
  export type BenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a Benefit.
     */
    data: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
    /**
     * Choose, which Benefit to update.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit updateMany
   */
  export type BenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit updateManyAndReturn
   */
  export type BenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit upsert
   */
  export type BenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the Benefit to update in case it exists.
     */
    where: BenefitWhereUniqueInput
    /**
     * In case the Benefit found by the `where` argument doesn't exist, create a new Benefit with this data.
     */
    create: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
    /**
     * In case the Benefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
  }

  /**
   * Benefit delete
   */
  export type BenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter which Benefit to delete.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit deleteMany
   */
  export type BenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefits to delete
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to delete.
     */
    limit?: number
  }

  /**
   * Benefit.userAllowance
   */
  export type Benefit$userAllowanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    where?: UserBenefitWhereInput
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    cursor?: UserBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * Benefit without action
   */
  export type BenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeType
   */

  export type AggregateEmployeeType = {
    _count: EmployeeTypeCountAggregateOutputType | null
    _avg: EmployeeTypeAvgAggregateOutputType | null
    _sum: EmployeeTypeSumAggregateOutputType | null
    _min: EmployeeTypeMinAggregateOutputType | null
    _max: EmployeeTypeMaxAggregateOutputType | null
  }

  export type EmployeeTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeeTypeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeeTypeMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    active: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeTypeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    active: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeTypeCountAggregateOutputType = {
    id: number
    code: number
    name: number
    active: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeTypeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeeTypeSumAggregateInputType = {
    id?: true
  }

  export type EmployeeTypeMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeTypeMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeTypeCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeType to aggregate.
     */
    where?: EmployeeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTypes to fetch.
     */
    orderBy?: EmployeeTypeOrderByWithRelationInput | EmployeeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeTypes
    **/
    _count?: true | EmployeeTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeTypeMaxAggregateInputType
  }

  export type GetEmployeeTypeAggregateType<T extends EmployeeTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeType[P]>
      : GetScalarType<T[P], AggregateEmployeeType[P]>
  }




  export type EmployeeTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeTypeWhereInput
    orderBy?: EmployeeTypeOrderByWithAggregationInput | EmployeeTypeOrderByWithAggregationInput[]
    by: EmployeeTypeScalarFieldEnum[] | EmployeeTypeScalarFieldEnum
    having?: EmployeeTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeTypeCountAggregateInputType | true
    _avg?: EmployeeTypeAvgAggregateInputType
    _sum?: EmployeeTypeSumAggregateInputType
    _min?: EmployeeTypeMinAggregateInputType
    _max?: EmployeeTypeMaxAggregateInputType
  }

  export type EmployeeTypeGroupByOutputType = {
    id: number
    code: string
    name: string
    active: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeTypeCountAggregateOutputType | null
    _avg: EmployeeTypeAvgAggregateOutputType | null
    _sum: EmployeeTypeSumAggregateOutputType | null
    _min: EmployeeTypeMinAggregateOutputType | null
    _max: EmployeeTypeMaxAggregateOutputType | null
  }

  type GetEmployeeTypeGroupByPayload<T extends EmployeeTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeTypeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | EmployeeType$userArgs<ExtArgs>
    _count?: boolean | EmployeeTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeType"]>

  export type EmployeeTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employeeType"]>

  export type EmployeeTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employeeType"]>

  export type EmployeeTypeSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "active" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["employeeType"]>
  export type EmployeeTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmployeeType$userArgs<ExtArgs>
    _count?: boolean | EmployeeTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeeTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeType"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      active: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeeType"]>
    composites: {}
  }

  type EmployeeTypeGetPayload<S extends boolean | null | undefined | EmployeeTypeDefaultArgs> = $Result.GetResult<Prisma.$EmployeeTypePayload, S>

  type EmployeeTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeTypeCountAggregateInputType | true
    }

  export interface EmployeeTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeType'], meta: { name: 'EmployeeType' } }
    /**
     * Find zero or one EmployeeType that matches the filter.
     * @param {EmployeeTypeFindUniqueArgs} args - Arguments to find a EmployeeType
     * @example
     * // Get one EmployeeType
     * const employeeType = await prisma.employeeType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeTypeFindUniqueArgs>(args: SelectSubset<T, EmployeeTypeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeTypeClient<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeTypeFindUniqueOrThrowArgs} args - Arguments to find a EmployeeType
     * @example
     * // Get one EmployeeType
     * const employeeType = await prisma.employeeType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeTypeClient<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTypeFindFirstArgs} args - Arguments to find a EmployeeType
     * @example
     * // Get one EmployeeType
     * const employeeType = await prisma.employeeType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeTypeFindFirstArgs>(args?: SelectSubset<T, EmployeeTypeFindFirstArgs<ExtArgs>>): Prisma__EmployeeTypeClient<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTypeFindFirstOrThrowArgs} args - Arguments to find a EmployeeType
     * @example
     * // Get one EmployeeType
     * const employeeType = await prisma.employeeType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeTypeClient<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeTypes
     * const employeeTypes = await prisma.employeeType.findMany()
     * 
     * // Get first 10 EmployeeTypes
     * const employeeTypes = await prisma.employeeType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeTypeWithIdOnly = await prisma.employeeType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeTypeFindManyArgs>(args?: SelectSubset<T, EmployeeTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeType.
     * @param {EmployeeTypeCreateArgs} args - Arguments to create a EmployeeType.
     * @example
     * // Create one EmployeeType
     * const EmployeeType = await prisma.employeeType.create({
     *   data: {
     *     // ... data to create a EmployeeType
     *   }
     * })
     * 
     */
    create<T extends EmployeeTypeCreateArgs>(args: SelectSubset<T, EmployeeTypeCreateArgs<ExtArgs>>): Prisma__EmployeeTypeClient<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeTypes.
     * @param {EmployeeTypeCreateManyArgs} args - Arguments to create many EmployeeTypes.
     * @example
     * // Create many EmployeeTypes
     * const employeeType = await prisma.employeeType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeTypeCreateManyArgs>(args?: SelectSubset<T, EmployeeTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeTypes and returns the data saved in the database.
     * @param {EmployeeTypeCreateManyAndReturnArgs} args - Arguments to create many EmployeeTypes.
     * @example
     * // Create many EmployeeTypes
     * const employeeType = await prisma.employeeType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeTypes and only return the `id`
     * const employeeTypeWithIdOnly = await prisma.employeeType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeType.
     * @param {EmployeeTypeDeleteArgs} args - Arguments to delete one EmployeeType.
     * @example
     * // Delete one EmployeeType
     * const EmployeeType = await prisma.employeeType.delete({
     *   where: {
     *     // ... filter to delete one EmployeeType
     *   }
     * })
     * 
     */
    delete<T extends EmployeeTypeDeleteArgs>(args: SelectSubset<T, EmployeeTypeDeleteArgs<ExtArgs>>): Prisma__EmployeeTypeClient<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeType.
     * @param {EmployeeTypeUpdateArgs} args - Arguments to update one EmployeeType.
     * @example
     * // Update one EmployeeType
     * const employeeType = await prisma.employeeType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeTypeUpdateArgs>(args: SelectSubset<T, EmployeeTypeUpdateArgs<ExtArgs>>): Prisma__EmployeeTypeClient<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeTypes.
     * @param {EmployeeTypeDeleteManyArgs} args - Arguments to filter EmployeeTypes to delete.
     * @example
     * // Delete a few EmployeeTypes
     * const { count } = await prisma.employeeType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeTypeDeleteManyArgs>(args?: SelectSubset<T, EmployeeTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeTypes
     * const employeeType = await prisma.employeeType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeTypeUpdateManyArgs>(args: SelectSubset<T, EmployeeTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeTypes and returns the data updated in the database.
     * @param {EmployeeTypeUpdateManyAndReturnArgs} args - Arguments to update many EmployeeTypes.
     * @example
     * // Update many EmployeeTypes
     * const employeeType = await prisma.employeeType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeTypes and only return the `id`
     * const employeeTypeWithIdOnly = await prisma.employeeType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeType.
     * @param {EmployeeTypeUpsertArgs} args - Arguments to update or create a EmployeeType.
     * @example
     * // Update or create a EmployeeType
     * const employeeType = await prisma.employeeType.upsert({
     *   create: {
     *     // ... data to create a EmployeeType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeType we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeTypeUpsertArgs>(args: SelectSubset<T, EmployeeTypeUpsertArgs<ExtArgs>>): Prisma__EmployeeTypeClient<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTypeCountArgs} args - Arguments to filter EmployeeTypes to count.
     * @example
     * // Count the number of EmployeeTypes
     * const count = await prisma.employeeType.count({
     *   where: {
     *     // ... the filter for the EmployeeTypes we want to count
     *   }
     * })
    **/
    count<T extends EmployeeTypeCountArgs>(
      args?: Subset<T, EmployeeTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeTypeAggregateArgs>(args: Subset<T, EmployeeTypeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeTypeAggregateType<T>>

    /**
     * Group by EmployeeType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeTypeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeType model
   */
  readonly fields: EmployeeTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends EmployeeType$userArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeType$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeType model
   */
  interface EmployeeTypeFieldRefs {
    readonly id: FieldRef<"EmployeeType", 'Int'>
    readonly code: FieldRef<"EmployeeType", 'String'>
    readonly name: FieldRef<"EmployeeType", 'String'>
    readonly active: FieldRef<"EmployeeType", 'Boolean'>
    readonly description: FieldRef<"EmployeeType", 'String'>
    readonly createdAt: FieldRef<"EmployeeType", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeType findUnique
   */
  export type EmployeeTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeType to fetch.
     */
    where: EmployeeTypeWhereUniqueInput
  }

  /**
   * EmployeeType findUniqueOrThrow
   */
  export type EmployeeTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeType to fetch.
     */
    where: EmployeeTypeWhereUniqueInput
  }

  /**
   * EmployeeType findFirst
   */
  export type EmployeeTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeType to fetch.
     */
    where?: EmployeeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTypes to fetch.
     */
    orderBy?: EmployeeTypeOrderByWithRelationInput | EmployeeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeTypes.
     */
    cursor?: EmployeeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeTypes.
     */
    distinct?: EmployeeTypeScalarFieldEnum | EmployeeTypeScalarFieldEnum[]
  }

  /**
   * EmployeeType findFirstOrThrow
   */
  export type EmployeeTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeType to fetch.
     */
    where?: EmployeeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTypes to fetch.
     */
    orderBy?: EmployeeTypeOrderByWithRelationInput | EmployeeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeTypes.
     */
    cursor?: EmployeeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeTypes.
     */
    distinct?: EmployeeTypeScalarFieldEnum | EmployeeTypeScalarFieldEnum[]
  }

  /**
   * EmployeeType findMany
   */
  export type EmployeeTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeTypes to fetch.
     */
    where?: EmployeeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTypes to fetch.
     */
    orderBy?: EmployeeTypeOrderByWithRelationInput | EmployeeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeTypes.
     */
    cursor?: EmployeeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTypes.
     */
    skip?: number
    distinct?: EmployeeTypeScalarFieldEnum | EmployeeTypeScalarFieldEnum[]
  }

  /**
   * EmployeeType create
   */
  export type EmployeeTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeType.
     */
    data: XOR<EmployeeTypeCreateInput, EmployeeTypeUncheckedCreateInput>
  }

  /**
   * EmployeeType createMany
   */
  export type EmployeeTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeTypes.
     */
    data: EmployeeTypeCreateManyInput | EmployeeTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeType createManyAndReturn
   */
  export type EmployeeTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeTypes.
     */
    data: EmployeeTypeCreateManyInput | EmployeeTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeType update
   */
  export type EmployeeTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeType.
     */
    data: XOR<EmployeeTypeUpdateInput, EmployeeTypeUncheckedUpdateInput>
    /**
     * Choose, which EmployeeType to update.
     */
    where: EmployeeTypeWhereUniqueInput
  }

  /**
   * EmployeeType updateMany
   */
  export type EmployeeTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeTypes.
     */
    data: XOR<EmployeeTypeUpdateManyMutationInput, EmployeeTypeUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeTypes to update
     */
    where?: EmployeeTypeWhereInput
    /**
     * Limit how many EmployeeTypes to update.
     */
    limit?: number
  }

  /**
   * EmployeeType updateManyAndReturn
   */
  export type EmployeeTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeTypes.
     */
    data: XOR<EmployeeTypeUpdateManyMutationInput, EmployeeTypeUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeTypes to update
     */
    where?: EmployeeTypeWhereInput
    /**
     * Limit how many EmployeeTypes to update.
     */
    limit?: number
  }

  /**
   * EmployeeType upsert
   */
  export type EmployeeTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeType to update in case it exists.
     */
    where: EmployeeTypeWhereUniqueInput
    /**
     * In case the EmployeeType found by the `where` argument doesn't exist, create a new EmployeeType with this data.
     */
    create: XOR<EmployeeTypeCreateInput, EmployeeTypeUncheckedCreateInput>
    /**
     * In case the EmployeeType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeTypeUpdateInput, EmployeeTypeUncheckedUpdateInput>
  }

  /**
   * EmployeeType delete
   */
  export type EmployeeTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    /**
     * Filter which EmployeeType to delete.
     */
    where: EmployeeTypeWhereUniqueInput
  }

  /**
   * EmployeeType deleteMany
   */
  export type EmployeeTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeTypes to delete
     */
    where?: EmployeeTypeWhereInput
    /**
     * Limit how many EmployeeTypes to delete.
     */
    limit?: number
  }

  /**
   * EmployeeType.user
   */
  export type EmployeeType$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * EmployeeType without action
   */
  export type EmployeeTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    id: number | null
  }

  export type PositionSumAggregateOutputType = {
    id: number | null
  }

  export type PositionMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    active: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PositionMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    active: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    code: number
    name: number
    active: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    id?: true
  }

  export type PositionSumAggregateInputType = {
    id?: true
  }

  export type PositionMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: number
    code: string
    name: string
    active: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Position$userArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "active" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Position$userArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      active: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Position$userArgs<ExtArgs> = {}>(args?: Subset<T, Position$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Position model
   */
  interface PositionFieldRefs {
    readonly id: FieldRef<"Position", 'Int'>
    readonly code: FieldRef<"Position", 'String'>
    readonly name: FieldRef<"Position", 'String'>
    readonly active: FieldRef<"Position", 'Boolean'>
    readonly description: FieldRef<"Position", 'String'>
    readonly createdAt: FieldRef<"Position", 'DateTime'>
    readonly updatedAt: FieldRef<"Position", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position.user
   */
  export type Position$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    active: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    active: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    code: number
    name: number
    active: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    code: string
    name: string
    active: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "active" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      active: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly code: FieldRef<"Task", 'String'>
    readonly name: FieldRef<"Task", 'String'>
    readonly active: FieldRef<"Task", 'Boolean'>
    readonly description: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
  }


  /**
   * Model UserBasicInfo
   */

  export type AggregateUserBasicInfo = {
    _count: UserBasicInfoCountAggregateOutputType | null
    _avg: UserBasicInfoAvgAggregateOutputType | null
    _sum: UserBasicInfoSumAggregateOutputType | null
    _min: UserBasicInfoMinAggregateOutputType | null
    _max: UserBasicInfoMaxAggregateOutputType | null
  }

  export type UserBasicInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type UserBasicInfoSumAggregateOutputType = {
    id: number | null
  }

  export type UserBasicInfoMinAggregateOutputType = {
    id: number | null
    userId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    birthdate: Date | null
    mobileNumber: string | null
    maritalStatus: $Enums.MaritalStatus | null
    gender: $Enums.Gender | null
    nationality: $Enums.Nationality | null
    provinceCode: string | null
    cityCode: string | null
    brangayCode: string | null
    zipCode: string | null
    address: string | null
  }

  export type UserBasicInfoMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    birthdate: Date | null
    mobileNumber: string | null
    maritalStatus: $Enums.MaritalStatus | null
    gender: $Enums.Gender | null
    nationality: $Enums.Nationality | null
    provinceCode: string | null
    cityCode: string | null
    brangayCode: string | null
    zipCode: string | null
    address: string | null
  }

  export type UserBasicInfoCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    middleName: number
    lastName: number
    birthdate: number
    mobileNumber: number
    maritalStatus: number
    gender: number
    nationality: number
    provinceCode: number
    cityCode: number
    brangayCode: number
    zipCode: number
    address: number
    _all: number
  }


  export type UserBasicInfoAvgAggregateInputType = {
    id?: true
  }

  export type UserBasicInfoSumAggregateInputType = {
    id?: true
  }

  export type UserBasicInfoMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    birthdate?: true
    mobileNumber?: true
    maritalStatus?: true
    gender?: true
    nationality?: true
    provinceCode?: true
    cityCode?: true
    brangayCode?: true
    zipCode?: true
    address?: true
  }

  export type UserBasicInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    birthdate?: true
    mobileNumber?: true
    maritalStatus?: true
    gender?: true
    nationality?: true
    provinceCode?: true
    cityCode?: true
    brangayCode?: true
    zipCode?: true
    address?: true
  }

  export type UserBasicInfoCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    birthdate?: true
    mobileNumber?: true
    maritalStatus?: true
    gender?: true
    nationality?: true
    provinceCode?: true
    cityCode?: true
    brangayCode?: true
    zipCode?: true
    address?: true
    _all?: true
  }

  export type UserBasicInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBasicInfo to aggregate.
     */
    where?: UserBasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBasicInfos to fetch.
     */
    orderBy?: UserBasicInfoOrderByWithRelationInput | UserBasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBasicInfos
    **/
    _count?: true | UserBasicInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBasicInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBasicInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBasicInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBasicInfoMaxAggregateInputType
  }

  export type GetUserBasicInfoAggregateType<T extends UserBasicInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBasicInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBasicInfo[P]>
      : GetScalarType<T[P], AggregateUserBasicInfo[P]>
  }




  export type UserBasicInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBasicInfoWhereInput
    orderBy?: UserBasicInfoOrderByWithAggregationInput | UserBasicInfoOrderByWithAggregationInput[]
    by: UserBasicInfoScalarFieldEnum[] | UserBasicInfoScalarFieldEnum
    having?: UserBasicInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBasicInfoCountAggregateInputType | true
    _avg?: UserBasicInfoAvgAggregateInputType
    _sum?: UserBasicInfoSumAggregateInputType
    _min?: UserBasicInfoMinAggregateInputType
    _max?: UserBasicInfoMaxAggregateInputType
  }

  export type UserBasicInfoGroupByOutputType = {
    id: number
    userId: string
    firstName: string
    middleName: string
    lastName: string
    birthdate: Date
    mobileNumber: string
    maritalStatus: $Enums.MaritalStatus
    gender: $Enums.Gender
    nationality: $Enums.Nationality
    provinceCode: string
    cityCode: string
    brangayCode: string
    zipCode: string
    address: string
    _count: UserBasicInfoCountAggregateOutputType | null
    _avg: UserBasicInfoAvgAggregateOutputType | null
    _sum: UserBasicInfoSumAggregateOutputType | null
    _min: UserBasicInfoMinAggregateOutputType | null
    _max: UserBasicInfoMaxAggregateOutputType | null
  }

  type GetUserBasicInfoGroupByPayload<T extends UserBasicInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBasicInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBasicInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBasicInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserBasicInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserBasicInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    birthdate?: boolean
    mobileNumber?: boolean
    maritalStatus?: boolean
    gender?: boolean
    nationality?: boolean
    provinceCode?: boolean
    cityCode?: boolean
    brangayCode?: boolean
    zipCode?: boolean
    address?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBasicInfo"]>

  export type UserBasicInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    birthdate?: boolean
    mobileNumber?: boolean
    maritalStatus?: boolean
    gender?: boolean
    nationality?: boolean
    provinceCode?: boolean
    cityCode?: boolean
    brangayCode?: boolean
    zipCode?: boolean
    address?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBasicInfo"]>

  export type UserBasicInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    birthdate?: boolean
    mobileNumber?: boolean
    maritalStatus?: boolean
    gender?: boolean
    nationality?: boolean
    provinceCode?: boolean
    cityCode?: boolean
    brangayCode?: boolean
    zipCode?: boolean
    address?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBasicInfo"]>

  export type UserBasicInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    birthdate?: boolean
    mobileNumber?: boolean
    maritalStatus?: boolean
    gender?: boolean
    nationality?: boolean
    provinceCode?: boolean
    cityCode?: boolean
    brangayCode?: boolean
    zipCode?: boolean
    address?: boolean
  }

  export type UserBasicInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "middleName" | "lastName" | "birthdate" | "mobileNumber" | "maritalStatus" | "gender" | "nationality" | "provinceCode" | "cityCode" | "brangayCode" | "zipCode" | "address", ExtArgs["result"]["userBasicInfo"]>
  export type UserBasicInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserBasicInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserBasicInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserBasicInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBasicInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      firstName: string
      middleName: string
      lastName: string
      birthdate: Date
      mobileNumber: string
      maritalStatus: $Enums.MaritalStatus
      gender: $Enums.Gender
      nationality: $Enums.Nationality
      provinceCode: string
      cityCode: string
      brangayCode: string
      zipCode: string
      address: string
    }, ExtArgs["result"]["userBasicInfo"]>
    composites: {}
  }

  type UserBasicInfoGetPayload<S extends boolean | null | undefined | UserBasicInfoDefaultArgs> = $Result.GetResult<Prisma.$UserBasicInfoPayload, S>

  type UserBasicInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBasicInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBasicInfoCountAggregateInputType | true
    }

  export interface UserBasicInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBasicInfo'], meta: { name: 'UserBasicInfo' } }
    /**
     * Find zero or one UserBasicInfo that matches the filter.
     * @param {UserBasicInfoFindUniqueArgs} args - Arguments to find a UserBasicInfo
     * @example
     * // Get one UserBasicInfo
     * const userBasicInfo = await prisma.userBasicInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBasicInfoFindUniqueArgs>(args: SelectSubset<T, UserBasicInfoFindUniqueArgs<ExtArgs>>): Prisma__UserBasicInfoClient<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBasicInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBasicInfoFindUniqueOrThrowArgs} args - Arguments to find a UserBasicInfo
     * @example
     * // Get one UserBasicInfo
     * const userBasicInfo = await prisma.userBasicInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBasicInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBasicInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBasicInfoClient<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBasicInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBasicInfoFindFirstArgs} args - Arguments to find a UserBasicInfo
     * @example
     * // Get one UserBasicInfo
     * const userBasicInfo = await prisma.userBasicInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBasicInfoFindFirstArgs>(args?: SelectSubset<T, UserBasicInfoFindFirstArgs<ExtArgs>>): Prisma__UserBasicInfoClient<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBasicInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBasicInfoFindFirstOrThrowArgs} args - Arguments to find a UserBasicInfo
     * @example
     * // Get one UserBasicInfo
     * const userBasicInfo = await prisma.userBasicInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBasicInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBasicInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBasicInfoClient<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBasicInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBasicInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBasicInfos
     * const userBasicInfos = await prisma.userBasicInfo.findMany()
     * 
     * // Get first 10 UserBasicInfos
     * const userBasicInfos = await prisma.userBasicInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBasicInfoWithIdOnly = await prisma.userBasicInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBasicInfoFindManyArgs>(args?: SelectSubset<T, UserBasicInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBasicInfo.
     * @param {UserBasicInfoCreateArgs} args - Arguments to create a UserBasicInfo.
     * @example
     * // Create one UserBasicInfo
     * const UserBasicInfo = await prisma.userBasicInfo.create({
     *   data: {
     *     // ... data to create a UserBasicInfo
     *   }
     * })
     * 
     */
    create<T extends UserBasicInfoCreateArgs>(args: SelectSubset<T, UserBasicInfoCreateArgs<ExtArgs>>): Prisma__UserBasicInfoClient<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBasicInfos.
     * @param {UserBasicInfoCreateManyArgs} args - Arguments to create many UserBasicInfos.
     * @example
     * // Create many UserBasicInfos
     * const userBasicInfo = await prisma.userBasicInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBasicInfoCreateManyArgs>(args?: SelectSubset<T, UserBasicInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBasicInfos and returns the data saved in the database.
     * @param {UserBasicInfoCreateManyAndReturnArgs} args - Arguments to create many UserBasicInfos.
     * @example
     * // Create many UserBasicInfos
     * const userBasicInfo = await prisma.userBasicInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBasicInfos and only return the `id`
     * const userBasicInfoWithIdOnly = await prisma.userBasicInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBasicInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBasicInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBasicInfo.
     * @param {UserBasicInfoDeleteArgs} args - Arguments to delete one UserBasicInfo.
     * @example
     * // Delete one UserBasicInfo
     * const UserBasicInfo = await prisma.userBasicInfo.delete({
     *   where: {
     *     // ... filter to delete one UserBasicInfo
     *   }
     * })
     * 
     */
    delete<T extends UserBasicInfoDeleteArgs>(args: SelectSubset<T, UserBasicInfoDeleteArgs<ExtArgs>>): Prisma__UserBasicInfoClient<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBasicInfo.
     * @param {UserBasicInfoUpdateArgs} args - Arguments to update one UserBasicInfo.
     * @example
     * // Update one UserBasicInfo
     * const userBasicInfo = await prisma.userBasicInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBasicInfoUpdateArgs>(args: SelectSubset<T, UserBasicInfoUpdateArgs<ExtArgs>>): Prisma__UserBasicInfoClient<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBasicInfos.
     * @param {UserBasicInfoDeleteManyArgs} args - Arguments to filter UserBasicInfos to delete.
     * @example
     * // Delete a few UserBasicInfos
     * const { count } = await prisma.userBasicInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBasicInfoDeleteManyArgs>(args?: SelectSubset<T, UserBasicInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBasicInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBasicInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBasicInfos
     * const userBasicInfo = await prisma.userBasicInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBasicInfoUpdateManyArgs>(args: SelectSubset<T, UserBasicInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBasicInfos and returns the data updated in the database.
     * @param {UserBasicInfoUpdateManyAndReturnArgs} args - Arguments to update many UserBasicInfos.
     * @example
     * // Update many UserBasicInfos
     * const userBasicInfo = await prisma.userBasicInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBasicInfos and only return the `id`
     * const userBasicInfoWithIdOnly = await prisma.userBasicInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBasicInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBasicInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBasicInfo.
     * @param {UserBasicInfoUpsertArgs} args - Arguments to update or create a UserBasicInfo.
     * @example
     * // Update or create a UserBasicInfo
     * const userBasicInfo = await prisma.userBasicInfo.upsert({
     *   create: {
     *     // ... data to create a UserBasicInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBasicInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserBasicInfoUpsertArgs>(args: SelectSubset<T, UserBasicInfoUpsertArgs<ExtArgs>>): Prisma__UserBasicInfoClient<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBasicInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBasicInfoCountArgs} args - Arguments to filter UserBasicInfos to count.
     * @example
     * // Count the number of UserBasicInfos
     * const count = await prisma.userBasicInfo.count({
     *   where: {
     *     // ... the filter for the UserBasicInfos we want to count
     *   }
     * })
    **/
    count<T extends UserBasicInfoCountArgs>(
      args?: Subset<T, UserBasicInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBasicInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBasicInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBasicInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBasicInfoAggregateArgs>(args: Subset<T, UserBasicInfoAggregateArgs>): Prisma.PrismaPromise<GetUserBasicInfoAggregateType<T>>

    /**
     * Group by UserBasicInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBasicInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBasicInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBasicInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserBasicInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBasicInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBasicInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBasicInfo model
   */
  readonly fields: UserBasicInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBasicInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBasicInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBasicInfo model
   */
  interface UserBasicInfoFieldRefs {
    readonly id: FieldRef<"UserBasicInfo", 'Int'>
    readonly userId: FieldRef<"UserBasicInfo", 'String'>
    readonly firstName: FieldRef<"UserBasicInfo", 'String'>
    readonly middleName: FieldRef<"UserBasicInfo", 'String'>
    readonly lastName: FieldRef<"UserBasicInfo", 'String'>
    readonly birthdate: FieldRef<"UserBasicInfo", 'DateTime'>
    readonly mobileNumber: FieldRef<"UserBasicInfo", 'String'>
    readonly maritalStatus: FieldRef<"UserBasicInfo", 'MaritalStatus'>
    readonly gender: FieldRef<"UserBasicInfo", 'Gender'>
    readonly nationality: FieldRef<"UserBasicInfo", 'Nationality'>
    readonly provinceCode: FieldRef<"UserBasicInfo", 'String'>
    readonly cityCode: FieldRef<"UserBasicInfo", 'String'>
    readonly brangayCode: FieldRef<"UserBasicInfo", 'String'>
    readonly zipCode: FieldRef<"UserBasicInfo", 'String'>
    readonly address: FieldRef<"UserBasicInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserBasicInfo findUnique
   */
  export type UserBasicInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserBasicInfo to fetch.
     */
    where: UserBasicInfoWhereUniqueInput
  }

  /**
   * UserBasicInfo findUniqueOrThrow
   */
  export type UserBasicInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserBasicInfo to fetch.
     */
    where: UserBasicInfoWhereUniqueInput
  }

  /**
   * UserBasicInfo findFirst
   */
  export type UserBasicInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserBasicInfo to fetch.
     */
    where?: UserBasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBasicInfos to fetch.
     */
    orderBy?: UserBasicInfoOrderByWithRelationInput | UserBasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBasicInfos.
     */
    cursor?: UserBasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBasicInfos.
     */
    distinct?: UserBasicInfoScalarFieldEnum | UserBasicInfoScalarFieldEnum[]
  }

  /**
   * UserBasicInfo findFirstOrThrow
   */
  export type UserBasicInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserBasicInfo to fetch.
     */
    where?: UserBasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBasicInfos to fetch.
     */
    orderBy?: UserBasicInfoOrderByWithRelationInput | UserBasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBasicInfos.
     */
    cursor?: UserBasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBasicInfos.
     */
    distinct?: UserBasicInfoScalarFieldEnum | UserBasicInfoScalarFieldEnum[]
  }

  /**
   * UserBasicInfo findMany
   */
  export type UserBasicInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserBasicInfos to fetch.
     */
    where?: UserBasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBasicInfos to fetch.
     */
    orderBy?: UserBasicInfoOrderByWithRelationInput | UserBasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBasicInfos.
     */
    cursor?: UserBasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBasicInfos.
     */
    skip?: number
    distinct?: UserBasicInfoScalarFieldEnum | UserBasicInfoScalarFieldEnum[]
  }

  /**
   * UserBasicInfo create
   */
  export type UserBasicInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBasicInfo.
     */
    data: XOR<UserBasicInfoCreateInput, UserBasicInfoUncheckedCreateInput>
  }

  /**
   * UserBasicInfo createMany
   */
  export type UserBasicInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBasicInfos.
     */
    data: UserBasicInfoCreateManyInput | UserBasicInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBasicInfo createManyAndReturn
   */
  export type UserBasicInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * The data used to create many UserBasicInfos.
     */
    data: UserBasicInfoCreateManyInput | UserBasicInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBasicInfo update
   */
  export type UserBasicInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBasicInfo.
     */
    data: XOR<UserBasicInfoUpdateInput, UserBasicInfoUncheckedUpdateInput>
    /**
     * Choose, which UserBasicInfo to update.
     */
    where: UserBasicInfoWhereUniqueInput
  }

  /**
   * UserBasicInfo updateMany
   */
  export type UserBasicInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBasicInfos.
     */
    data: XOR<UserBasicInfoUpdateManyMutationInput, UserBasicInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserBasicInfos to update
     */
    where?: UserBasicInfoWhereInput
    /**
     * Limit how many UserBasicInfos to update.
     */
    limit?: number
  }

  /**
   * UserBasicInfo updateManyAndReturn
   */
  export type UserBasicInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * The data used to update UserBasicInfos.
     */
    data: XOR<UserBasicInfoUpdateManyMutationInput, UserBasicInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserBasicInfos to update
     */
    where?: UserBasicInfoWhereInput
    /**
     * Limit how many UserBasicInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBasicInfo upsert
   */
  export type UserBasicInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBasicInfo to update in case it exists.
     */
    where: UserBasicInfoWhereUniqueInput
    /**
     * In case the UserBasicInfo found by the `where` argument doesn't exist, create a new UserBasicInfo with this data.
     */
    create: XOR<UserBasicInfoCreateInput, UserBasicInfoUncheckedCreateInput>
    /**
     * In case the UserBasicInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBasicInfoUpdateInput, UserBasicInfoUncheckedUpdateInput>
  }

  /**
   * UserBasicInfo delete
   */
  export type UserBasicInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    /**
     * Filter which UserBasicInfo to delete.
     */
    where: UserBasicInfoWhereUniqueInput
  }

  /**
   * UserBasicInfo deleteMany
   */
  export type UserBasicInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBasicInfos to delete
     */
    where?: UserBasicInfoWhereInput
    /**
     * Limit how many UserBasicInfos to delete.
     */
    limit?: number
  }

  /**
   * UserBasicInfo without action
   */
  export type UserBasicInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
  }


  /**
   * Model UserEmploymentBackground
   */

  export type AggregateUserEmploymentBackground = {
    _count: UserEmploymentBackgroundCountAggregateOutputType | null
    _avg: UserEmploymentBackgroundAvgAggregateOutputType | null
    _sum: UserEmploymentBackgroundSumAggregateOutputType | null
    _min: UserEmploymentBackgroundMinAggregateOutputType | null
    _max: UserEmploymentBackgroundMaxAggregateOutputType | null
  }

  export type UserEmploymentBackgroundAvgAggregateOutputType = {
    id: number | null
  }

  export type UserEmploymentBackgroundSumAggregateOutputType = {
    id: number | null
  }

  export type UserEmploymentBackgroundMinAggregateOutputType = {
    id: number | null
    userId: string | null
    company: string | null
    position: string | null
    dateStart: Date | null
    dateEnd: Date | null
  }

  export type UserEmploymentBackgroundMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    company: string | null
    position: string | null
    dateStart: Date | null
    dateEnd: Date | null
  }

  export type UserEmploymentBackgroundCountAggregateOutputType = {
    id: number
    userId: number
    company: number
    position: number
    dateStart: number
    dateEnd: number
    _all: number
  }


  export type UserEmploymentBackgroundAvgAggregateInputType = {
    id?: true
  }

  export type UserEmploymentBackgroundSumAggregateInputType = {
    id?: true
  }

  export type UserEmploymentBackgroundMinAggregateInputType = {
    id?: true
    userId?: true
    company?: true
    position?: true
    dateStart?: true
    dateEnd?: true
  }

  export type UserEmploymentBackgroundMaxAggregateInputType = {
    id?: true
    userId?: true
    company?: true
    position?: true
    dateStart?: true
    dateEnd?: true
  }

  export type UserEmploymentBackgroundCountAggregateInputType = {
    id?: true
    userId?: true
    company?: true
    position?: true
    dateStart?: true
    dateEnd?: true
    _all?: true
  }

  export type UserEmploymentBackgroundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEmploymentBackground to aggregate.
     */
    where?: UserEmploymentBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEmploymentBackgrounds to fetch.
     */
    orderBy?: UserEmploymentBackgroundOrderByWithRelationInput | UserEmploymentBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserEmploymentBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEmploymentBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEmploymentBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserEmploymentBackgrounds
    **/
    _count?: true | UserEmploymentBackgroundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserEmploymentBackgroundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserEmploymentBackgroundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserEmploymentBackgroundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserEmploymentBackgroundMaxAggregateInputType
  }

  export type GetUserEmploymentBackgroundAggregateType<T extends UserEmploymentBackgroundAggregateArgs> = {
        [P in keyof T & keyof AggregateUserEmploymentBackground]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserEmploymentBackground[P]>
      : GetScalarType<T[P], AggregateUserEmploymentBackground[P]>
  }




  export type UserEmploymentBackgroundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEmploymentBackgroundWhereInput
    orderBy?: UserEmploymentBackgroundOrderByWithAggregationInput | UserEmploymentBackgroundOrderByWithAggregationInput[]
    by: UserEmploymentBackgroundScalarFieldEnum[] | UserEmploymentBackgroundScalarFieldEnum
    having?: UserEmploymentBackgroundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserEmploymentBackgroundCountAggregateInputType | true
    _avg?: UserEmploymentBackgroundAvgAggregateInputType
    _sum?: UserEmploymentBackgroundSumAggregateInputType
    _min?: UserEmploymentBackgroundMinAggregateInputType
    _max?: UserEmploymentBackgroundMaxAggregateInputType
  }

  export type UserEmploymentBackgroundGroupByOutputType = {
    id: number
    userId: string
    company: string
    position: string
    dateStart: Date
    dateEnd: Date
    _count: UserEmploymentBackgroundCountAggregateOutputType | null
    _avg: UserEmploymentBackgroundAvgAggregateOutputType | null
    _sum: UserEmploymentBackgroundSumAggregateOutputType | null
    _min: UserEmploymentBackgroundMinAggregateOutputType | null
    _max: UserEmploymentBackgroundMaxAggregateOutputType | null
  }

  type GetUserEmploymentBackgroundGroupByPayload<T extends UserEmploymentBackgroundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserEmploymentBackgroundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserEmploymentBackgroundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserEmploymentBackgroundGroupByOutputType[P]>
            : GetScalarType<T[P], UserEmploymentBackgroundGroupByOutputType[P]>
        }
      >
    >


  export type UserEmploymentBackgroundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    company?: boolean
    position?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEmploymentBackground"]>

  export type UserEmploymentBackgroundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    company?: boolean
    position?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEmploymentBackground"]>

  export type UserEmploymentBackgroundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    company?: boolean
    position?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEmploymentBackground"]>

  export type UserEmploymentBackgroundSelectScalar = {
    id?: boolean
    userId?: boolean
    company?: boolean
    position?: boolean
    dateStart?: boolean
    dateEnd?: boolean
  }

  export type UserEmploymentBackgroundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "company" | "position" | "dateStart" | "dateEnd", ExtArgs["result"]["userEmploymentBackground"]>
  export type UserEmploymentBackgroundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserEmploymentBackgroundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserEmploymentBackgroundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserEmploymentBackgroundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserEmploymentBackground"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      company: string
      position: string
      dateStart: Date
      dateEnd: Date
    }, ExtArgs["result"]["userEmploymentBackground"]>
    composites: {}
  }

  type UserEmploymentBackgroundGetPayload<S extends boolean | null | undefined | UserEmploymentBackgroundDefaultArgs> = $Result.GetResult<Prisma.$UserEmploymentBackgroundPayload, S>

  type UserEmploymentBackgroundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserEmploymentBackgroundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserEmploymentBackgroundCountAggregateInputType | true
    }

  export interface UserEmploymentBackgroundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserEmploymentBackground'], meta: { name: 'UserEmploymentBackground' } }
    /**
     * Find zero or one UserEmploymentBackground that matches the filter.
     * @param {UserEmploymentBackgroundFindUniqueArgs} args - Arguments to find a UserEmploymentBackground
     * @example
     * // Get one UserEmploymentBackground
     * const userEmploymentBackground = await prisma.userEmploymentBackground.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEmploymentBackgroundFindUniqueArgs>(args: SelectSubset<T, UserEmploymentBackgroundFindUniqueArgs<ExtArgs>>): Prisma__UserEmploymentBackgroundClient<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserEmploymentBackground that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEmploymentBackgroundFindUniqueOrThrowArgs} args - Arguments to find a UserEmploymentBackground
     * @example
     * // Get one UserEmploymentBackground
     * const userEmploymentBackground = await prisma.userEmploymentBackground.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEmploymentBackgroundFindUniqueOrThrowArgs>(args: SelectSubset<T, UserEmploymentBackgroundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserEmploymentBackgroundClient<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEmploymentBackground that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmploymentBackgroundFindFirstArgs} args - Arguments to find a UserEmploymentBackground
     * @example
     * // Get one UserEmploymentBackground
     * const userEmploymentBackground = await prisma.userEmploymentBackground.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEmploymentBackgroundFindFirstArgs>(args?: SelectSubset<T, UserEmploymentBackgroundFindFirstArgs<ExtArgs>>): Prisma__UserEmploymentBackgroundClient<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEmploymentBackground that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmploymentBackgroundFindFirstOrThrowArgs} args - Arguments to find a UserEmploymentBackground
     * @example
     * // Get one UserEmploymentBackground
     * const userEmploymentBackground = await prisma.userEmploymentBackground.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEmploymentBackgroundFindFirstOrThrowArgs>(args?: SelectSubset<T, UserEmploymentBackgroundFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserEmploymentBackgroundClient<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEmploymentBackgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmploymentBackgroundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEmploymentBackgrounds
     * const userEmploymentBackgrounds = await prisma.userEmploymentBackground.findMany()
     * 
     * // Get first 10 UserEmploymentBackgrounds
     * const userEmploymentBackgrounds = await prisma.userEmploymentBackground.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userEmploymentBackgroundWithIdOnly = await prisma.userEmploymentBackground.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserEmploymentBackgroundFindManyArgs>(args?: SelectSubset<T, UserEmploymentBackgroundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserEmploymentBackground.
     * @param {UserEmploymentBackgroundCreateArgs} args - Arguments to create a UserEmploymentBackground.
     * @example
     * // Create one UserEmploymentBackground
     * const UserEmploymentBackground = await prisma.userEmploymentBackground.create({
     *   data: {
     *     // ... data to create a UserEmploymentBackground
     *   }
     * })
     * 
     */
    create<T extends UserEmploymentBackgroundCreateArgs>(args: SelectSubset<T, UserEmploymentBackgroundCreateArgs<ExtArgs>>): Prisma__UserEmploymentBackgroundClient<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserEmploymentBackgrounds.
     * @param {UserEmploymentBackgroundCreateManyArgs} args - Arguments to create many UserEmploymentBackgrounds.
     * @example
     * // Create many UserEmploymentBackgrounds
     * const userEmploymentBackground = await prisma.userEmploymentBackground.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserEmploymentBackgroundCreateManyArgs>(args?: SelectSubset<T, UserEmploymentBackgroundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserEmploymentBackgrounds and returns the data saved in the database.
     * @param {UserEmploymentBackgroundCreateManyAndReturnArgs} args - Arguments to create many UserEmploymentBackgrounds.
     * @example
     * // Create many UserEmploymentBackgrounds
     * const userEmploymentBackground = await prisma.userEmploymentBackground.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserEmploymentBackgrounds and only return the `id`
     * const userEmploymentBackgroundWithIdOnly = await prisma.userEmploymentBackground.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserEmploymentBackgroundCreateManyAndReturnArgs>(args?: SelectSubset<T, UserEmploymentBackgroundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserEmploymentBackground.
     * @param {UserEmploymentBackgroundDeleteArgs} args - Arguments to delete one UserEmploymentBackground.
     * @example
     * // Delete one UserEmploymentBackground
     * const UserEmploymentBackground = await prisma.userEmploymentBackground.delete({
     *   where: {
     *     // ... filter to delete one UserEmploymentBackground
     *   }
     * })
     * 
     */
    delete<T extends UserEmploymentBackgroundDeleteArgs>(args: SelectSubset<T, UserEmploymentBackgroundDeleteArgs<ExtArgs>>): Prisma__UserEmploymentBackgroundClient<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserEmploymentBackground.
     * @param {UserEmploymentBackgroundUpdateArgs} args - Arguments to update one UserEmploymentBackground.
     * @example
     * // Update one UserEmploymentBackground
     * const userEmploymentBackground = await prisma.userEmploymentBackground.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserEmploymentBackgroundUpdateArgs>(args: SelectSubset<T, UserEmploymentBackgroundUpdateArgs<ExtArgs>>): Prisma__UserEmploymentBackgroundClient<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserEmploymentBackgrounds.
     * @param {UserEmploymentBackgroundDeleteManyArgs} args - Arguments to filter UserEmploymentBackgrounds to delete.
     * @example
     * // Delete a few UserEmploymentBackgrounds
     * const { count } = await prisma.userEmploymentBackground.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserEmploymentBackgroundDeleteManyArgs>(args?: SelectSubset<T, UserEmploymentBackgroundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEmploymentBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmploymentBackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEmploymentBackgrounds
     * const userEmploymentBackground = await prisma.userEmploymentBackground.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserEmploymentBackgroundUpdateManyArgs>(args: SelectSubset<T, UserEmploymentBackgroundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEmploymentBackgrounds and returns the data updated in the database.
     * @param {UserEmploymentBackgroundUpdateManyAndReturnArgs} args - Arguments to update many UserEmploymentBackgrounds.
     * @example
     * // Update many UserEmploymentBackgrounds
     * const userEmploymentBackground = await prisma.userEmploymentBackground.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserEmploymentBackgrounds and only return the `id`
     * const userEmploymentBackgroundWithIdOnly = await prisma.userEmploymentBackground.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserEmploymentBackgroundUpdateManyAndReturnArgs>(args: SelectSubset<T, UserEmploymentBackgroundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserEmploymentBackground.
     * @param {UserEmploymentBackgroundUpsertArgs} args - Arguments to update or create a UserEmploymentBackground.
     * @example
     * // Update or create a UserEmploymentBackground
     * const userEmploymentBackground = await prisma.userEmploymentBackground.upsert({
     *   create: {
     *     // ... data to create a UserEmploymentBackground
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEmploymentBackground we want to update
     *   }
     * })
     */
    upsert<T extends UserEmploymentBackgroundUpsertArgs>(args: SelectSubset<T, UserEmploymentBackgroundUpsertArgs<ExtArgs>>): Prisma__UserEmploymentBackgroundClient<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserEmploymentBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmploymentBackgroundCountArgs} args - Arguments to filter UserEmploymentBackgrounds to count.
     * @example
     * // Count the number of UserEmploymentBackgrounds
     * const count = await prisma.userEmploymentBackground.count({
     *   where: {
     *     // ... the filter for the UserEmploymentBackgrounds we want to count
     *   }
     * })
    **/
    count<T extends UserEmploymentBackgroundCountArgs>(
      args?: Subset<T, UserEmploymentBackgroundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserEmploymentBackgroundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserEmploymentBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmploymentBackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserEmploymentBackgroundAggregateArgs>(args: Subset<T, UserEmploymentBackgroundAggregateArgs>): Prisma.PrismaPromise<GetUserEmploymentBackgroundAggregateType<T>>

    /**
     * Group by UserEmploymentBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmploymentBackgroundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserEmploymentBackgroundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserEmploymentBackgroundGroupByArgs['orderBy'] }
        : { orderBy?: UserEmploymentBackgroundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserEmploymentBackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEmploymentBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserEmploymentBackground model
   */
  readonly fields: UserEmploymentBackgroundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserEmploymentBackground.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserEmploymentBackgroundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserEmploymentBackground model
   */
  interface UserEmploymentBackgroundFieldRefs {
    readonly id: FieldRef<"UserEmploymentBackground", 'Int'>
    readonly userId: FieldRef<"UserEmploymentBackground", 'String'>
    readonly company: FieldRef<"UserEmploymentBackground", 'String'>
    readonly position: FieldRef<"UserEmploymentBackground", 'String'>
    readonly dateStart: FieldRef<"UserEmploymentBackground", 'DateTime'>
    readonly dateEnd: FieldRef<"UserEmploymentBackground", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserEmploymentBackground findUnique
   */
  export type UserEmploymentBackgroundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEmploymentBackground to fetch.
     */
    where: UserEmploymentBackgroundWhereUniqueInput
  }

  /**
   * UserEmploymentBackground findUniqueOrThrow
   */
  export type UserEmploymentBackgroundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEmploymentBackground to fetch.
     */
    where: UserEmploymentBackgroundWhereUniqueInput
  }

  /**
   * UserEmploymentBackground findFirst
   */
  export type UserEmploymentBackgroundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEmploymentBackground to fetch.
     */
    where?: UserEmploymentBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEmploymentBackgrounds to fetch.
     */
    orderBy?: UserEmploymentBackgroundOrderByWithRelationInput | UserEmploymentBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEmploymentBackgrounds.
     */
    cursor?: UserEmploymentBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEmploymentBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEmploymentBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEmploymentBackgrounds.
     */
    distinct?: UserEmploymentBackgroundScalarFieldEnum | UserEmploymentBackgroundScalarFieldEnum[]
  }

  /**
   * UserEmploymentBackground findFirstOrThrow
   */
  export type UserEmploymentBackgroundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEmploymentBackground to fetch.
     */
    where?: UserEmploymentBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEmploymentBackgrounds to fetch.
     */
    orderBy?: UserEmploymentBackgroundOrderByWithRelationInput | UserEmploymentBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEmploymentBackgrounds.
     */
    cursor?: UserEmploymentBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEmploymentBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEmploymentBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEmploymentBackgrounds.
     */
    distinct?: UserEmploymentBackgroundScalarFieldEnum | UserEmploymentBackgroundScalarFieldEnum[]
  }

  /**
   * UserEmploymentBackground findMany
   */
  export type UserEmploymentBackgroundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEmploymentBackgrounds to fetch.
     */
    where?: UserEmploymentBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEmploymentBackgrounds to fetch.
     */
    orderBy?: UserEmploymentBackgroundOrderByWithRelationInput | UserEmploymentBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserEmploymentBackgrounds.
     */
    cursor?: UserEmploymentBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEmploymentBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEmploymentBackgrounds.
     */
    skip?: number
    distinct?: UserEmploymentBackgroundScalarFieldEnum | UserEmploymentBackgroundScalarFieldEnum[]
  }

  /**
   * UserEmploymentBackground create
   */
  export type UserEmploymentBackgroundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to create a UserEmploymentBackground.
     */
    data: XOR<UserEmploymentBackgroundCreateInput, UserEmploymentBackgroundUncheckedCreateInput>
  }

  /**
   * UserEmploymentBackground createMany
   */
  export type UserEmploymentBackgroundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEmploymentBackgrounds.
     */
    data: UserEmploymentBackgroundCreateManyInput | UserEmploymentBackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserEmploymentBackground createManyAndReturn
   */
  export type UserEmploymentBackgroundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * The data used to create many UserEmploymentBackgrounds.
     */
    data: UserEmploymentBackgroundCreateManyInput | UserEmploymentBackgroundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEmploymentBackground update
   */
  export type UserEmploymentBackgroundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to update a UserEmploymentBackground.
     */
    data: XOR<UserEmploymentBackgroundUpdateInput, UserEmploymentBackgroundUncheckedUpdateInput>
    /**
     * Choose, which UserEmploymentBackground to update.
     */
    where: UserEmploymentBackgroundWhereUniqueInput
  }

  /**
   * UserEmploymentBackground updateMany
   */
  export type UserEmploymentBackgroundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEmploymentBackgrounds.
     */
    data: XOR<UserEmploymentBackgroundUpdateManyMutationInput, UserEmploymentBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which UserEmploymentBackgrounds to update
     */
    where?: UserEmploymentBackgroundWhereInput
    /**
     * Limit how many UserEmploymentBackgrounds to update.
     */
    limit?: number
  }

  /**
   * UserEmploymentBackground updateManyAndReturn
   */
  export type UserEmploymentBackgroundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * The data used to update UserEmploymentBackgrounds.
     */
    data: XOR<UserEmploymentBackgroundUpdateManyMutationInput, UserEmploymentBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which UserEmploymentBackgrounds to update
     */
    where?: UserEmploymentBackgroundWhereInput
    /**
     * Limit how many UserEmploymentBackgrounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEmploymentBackground upsert
   */
  export type UserEmploymentBackgroundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * The filter to search for the UserEmploymentBackground to update in case it exists.
     */
    where: UserEmploymentBackgroundWhereUniqueInput
    /**
     * In case the UserEmploymentBackground found by the `where` argument doesn't exist, create a new UserEmploymentBackground with this data.
     */
    create: XOR<UserEmploymentBackgroundCreateInput, UserEmploymentBackgroundUncheckedCreateInput>
    /**
     * In case the UserEmploymentBackground was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserEmploymentBackgroundUpdateInput, UserEmploymentBackgroundUncheckedUpdateInput>
  }

  /**
   * UserEmploymentBackground delete
   */
  export type UserEmploymentBackgroundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    /**
     * Filter which UserEmploymentBackground to delete.
     */
    where: UserEmploymentBackgroundWhereUniqueInput
  }

  /**
   * UserEmploymentBackground deleteMany
   */
  export type UserEmploymentBackgroundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEmploymentBackgrounds to delete
     */
    where?: UserEmploymentBackgroundWhereInput
    /**
     * Limit how many UserEmploymentBackgrounds to delete.
     */
    limit?: number
  }

  /**
   * UserEmploymentBackground without action
   */
  export type UserEmploymentBackgroundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
  }


  /**
   * Model UserEducationalBackground
   */

  export type AggregateUserEducationalBackground = {
    _count: UserEducationalBackgroundCountAggregateOutputType | null
    _avg: UserEducationalBackgroundAvgAggregateOutputType | null
    _sum: UserEducationalBackgroundSumAggregateOutputType | null
    _min: UserEducationalBackgroundMinAggregateOutputType | null
    _max: UserEducationalBackgroundMaxAggregateOutputType | null
  }

  export type UserEducationalBackgroundAvgAggregateOutputType = {
    id: number | null
  }

  export type UserEducationalBackgroundSumAggregateOutputType = {
    id: number | null
  }

  export type UserEducationalBackgroundMinAggregateOutputType = {
    id: number | null
    userId: string | null
    school: string | null
    level: string | null
    dateStart: Date | null
    dateEnd: Date | null
  }

  export type UserEducationalBackgroundMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    school: string | null
    level: string | null
    dateStart: Date | null
    dateEnd: Date | null
  }

  export type UserEducationalBackgroundCountAggregateOutputType = {
    id: number
    userId: number
    school: number
    level: number
    dateStart: number
    dateEnd: number
    _all: number
  }


  export type UserEducationalBackgroundAvgAggregateInputType = {
    id?: true
  }

  export type UserEducationalBackgroundSumAggregateInputType = {
    id?: true
  }

  export type UserEducationalBackgroundMinAggregateInputType = {
    id?: true
    userId?: true
    school?: true
    level?: true
    dateStart?: true
    dateEnd?: true
  }

  export type UserEducationalBackgroundMaxAggregateInputType = {
    id?: true
    userId?: true
    school?: true
    level?: true
    dateStart?: true
    dateEnd?: true
  }

  export type UserEducationalBackgroundCountAggregateInputType = {
    id?: true
    userId?: true
    school?: true
    level?: true
    dateStart?: true
    dateEnd?: true
    _all?: true
  }

  export type UserEducationalBackgroundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEducationalBackground to aggregate.
     */
    where?: UserEducationalBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducationalBackgrounds to fetch.
     */
    orderBy?: UserEducationalBackgroundOrderByWithRelationInput | UserEducationalBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserEducationalBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducationalBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducationalBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserEducationalBackgrounds
    **/
    _count?: true | UserEducationalBackgroundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserEducationalBackgroundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserEducationalBackgroundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserEducationalBackgroundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserEducationalBackgroundMaxAggregateInputType
  }

  export type GetUserEducationalBackgroundAggregateType<T extends UserEducationalBackgroundAggregateArgs> = {
        [P in keyof T & keyof AggregateUserEducationalBackground]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserEducationalBackground[P]>
      : GetScalarType<T[P], AggregateUserEducationalBackground[P]>
  }




  export type UserEducationalBackgroundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEducationalBackgroundWhereInput
    orderBy?: UserEducationalBackgroundOrderByWithAggregationInput | UserEducationalBackgroundOrderByWithAggregationInput[]
    by: UserEducationalBackgroundScalarFieldEnum[] | UserEducationalBackgroundScalarFieldEnum
    having?: UserEducationalBackgroundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserEducationalBackgroundCountAggregateInputType | true
    _avg?: UserEducationalBackgroundAvgAggregateInputType
    _sum?: UserEducationalBackgroundSumAggregateInputType
    _min?: UserEducationalBackgroundMinAggregateInputType
    _max?: UserEducationalBackgroundMaxAggregateInputType
  }

  export type UserEducationalBackgroundGroupByOutputType = {
    id: number
    userId: string
    school: string
    level: string
    dateStart: Date
    dateEnd: Date
    _count: UserEducationalBackgroundCountAggregateOutputType | null
    _avg: UserEducationalBackgroundAvgAggregateOutputType | null
    _sum: UserEducationalBackgroundSumAggregateOutputType | null
    _min: UserEducationalBackgroundMinAggregateOutputType | null
    _max: UserEducationalBackgroundMaxAggregateOutputType | null
  }

  type GetUserEducationalBackgroundGroupByPayload<T extends UserEducationalBackgroundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserEducationalBackgroundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserEducationalBackgroundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserEducationalBackgroundGroupByOutputType[P]>
            : GetScalarType<T[P], UserEducationalBackgroundGroupByOutputType[P]>
        }
      >
    >


  export type UserEducationalBackgroundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    school?: boolean
    level?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducationalBackground"]>

  export type UserEducationalBackgroundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    school?: boolean
    level?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducationalBackground"]>

  export type UserEducationalBackgroundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    school?: boolean
    level?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducationalBackground"]>

  export type UserEducationalBackgroundSelectScalar = {
    id?: boolean
    userId?: boolean
    school?: boolean
    level?: boolean
    dateStart?: boolean
    dateEnd?: boolean
  }

  export type UserEducationalBackgroundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "school" | "level" | "dateStart" | "dateEnd", ExtArgs["result"]["userEducationalBackground"]>
  export type UserEducationalBackgroundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserEducationalBackgroundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserEducationalBackgroundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserEducationalBackgroundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserEducationalBackground"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      school: string
      level: string
      dateStart: Date
      dateEnd: Date
    }, ExtArgs["result"]["userEducationalBackground"]>
    composites: {}
  }

  type UserEducationalBackgroundGetPayload<S extends boolean | null | undefined | UserEducationalBackgroundDefaultArgs> = $Result.GetResult<Prisma.$UserEducationalBackgroundPayload, S>

  type UserEducationalBackgroundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserEducationalBackgroundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserEducationalBackgroundCountAggregateInputType | true
    }

  export interface UserEducationalBackgroundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserEducationalBackground'], meta: { name: 'UserEducationalBackground' } }
    /**
     * Find zero or one UserEducationalBackground that matches the filter.
     * @param {UserEducationalBackgroundFindUniqueArgs} args - Arguments to find a UserEducationalBackground
     * @example
     * // Get one UserEducationalBackground
     * const userEducationalBackground = await prisma.userEducationalBackground.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEducationalBackgroundFindUniqueArgs>(args: SelectSubset<T, UserEducationalBackgroundFindUniqueArgs<ExtArgs>>): Prisma__UserEducationalBackgroundClient<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserEducationalBackground that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEducationalBackgroundFindUniqueOrThrowArgs} args - Arguments to find a UserEducationalBackground
     * @example
     * // Get one UserEducationalBackground
     * const userEducationalBackground = await prisma.userEducationalBackground.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEducationalBackgroundFindUniqueOrThrowArgs>(args: SelectSubset<T, UserEducationalBackgroundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserEducationalBackgroundClient<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEducationalBackground that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationalBackgroundFindFirstArgs} args - Arguments to find a UserEducationalBackground
     * @example
     * // Get one UserEducationalBackground
     * const userEducationalBackground = await prisma.userEducationalBackground.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEducationalBackgroundFindFirstArgs>(args?: SelectSubset<T, UserEducationalBackgroundFindFirstArgs<ExtArgs>>): Prisma__UserEducationalBackgroundClient<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEducationalBackground that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationalBackgroundFindFirstOrThrowArgs} args - Arguments to find a UserEducationalBackground
     * @example
     * // Get one UserEducationalBackground
     * const userEducationalBackground = await prisma.userEducationalBackground.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEducationalBackgroundFindFirstOrThrowArgs>(args?: SelectSubset<T, UserEducationalBackgroundFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserEducationalBackgroundClient<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEducationalBackgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationalBackgroundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEducationalBackgrounds
     * const userEducationalBackgrounds = await prisma.userEducationalBackground.findMany()
     * 
     * // Get first 10 UserEducationalBackgrounds
     * const userEducationalBackgrounds = await prisma.userEducationalBackground.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userEducationalBackgroundWithIdOnly = await prisma.userEducationalBackground.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserEducationalBackgroundFindManyArgs>(args?: SelectSubset<T, UserEducationalBackgroundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserEducationalBackground.
     * @param {UserEducationalBackgroundCreateArgs} args - Arguments to create a UserEducationalBackground.
     * @example
     * // Create one UserEducationalBackground
     * const UserEducationalBackground = await prisma.userEducationalBackground.create({
     *   data: {
     *     // ... data to create a UserEducationalBackground
     *   }
     * })
     * 
     */
    create<T extends UserEducationalBackgroundCreateArgs>(args: SelectSubset<T, UserEducationalBackgroundCreateArgs<ExtArgs>>): Prisma__UserEducationalBackgroundClient<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserEducationalBackgrounds.
     * @param {UserEducationalBackgroundCreateManyArgs} args - Arguments to create many UserEducationalBackgrounds.
     * @example
     * // Create many UserEducationalBackgrounds
     * const userEducationalBackground = await prisma.userEducationalBackground.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserEducationalBackgroundCreateManyArgs>(args?: SelectSubset<T, UserEducationalBackgroundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserEducationalBackgrounds and returns the data saved in the database.
     * @param {UserEducationalBackgroundCreateManyAndReturnArgs} args - Arguments to create many UserEducationalBackgrounds.
     * @example
     * // Create many UserEducationalBackgrounds
     * const userEducationalBackground = await prisma.userEducationalBackground.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserEducationalBackgrounds and only return the `id`
     * const userEducationalBackgroundWithIdOnly = await prisma.userEducationalBackground.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserEducationalBackgroundCreateManyAndReturnArgs>(args?: SelectSubset<T, UserEducationalBackgroundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserEducationalBackground.
     * @param {UserEducationalBackgroundDeleteArgs} args - Arguments to delete one UserEducationalBackground.
     * @example
     * // Delete one UserEducationalBackground
     * const UserEducationalBackground = await prisma.userEducationalBackground.delete({
     *   where: {
     *     // ... filter to delete one UserEducationalBackground
     *   }
     * })
     * 
     */
    delete<T extends UserEducationalBackgroundDeleteArgs>(args: SelectSubset<T, UserEducationalBackgroundDeleteArgs<ExtArgs>>): Prisma__UserEducationalBackgroundClient<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserEducationalBackground.
     * @param {UserEducationalBackgroundUpdateArgs} args - Arguments to update one UserEducationalBackground.
     * @example
     * // Update one UserEducationalBackground
     * const userEducationalBackground = await prisma.userEducationalBackground.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserEducationalBackgroundUpdateArgs>(args: SelectSubset<T, UserEducationalBackgroundUpdateArgs<ExtArgs>>): Prisma__UserEducationalBackgroundClient<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserEducationalBackgrounds.
     * @param {UserEducationalBackgroundDeleteManyArgs} args - Arguments to filter UserEducationalBackgrounds to delete.
     * @example
     * // Delete a few UserEducationalBackgrounds
     * const { count } = await prisma.userEducationalBackground.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserEducationalBackgroundDeleteManyArgs>(args?: SelectSubset<T, UserEducationalBackgroundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEducationalBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationalBackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEducationalBackgrounds
     * const userEducationalBackground = await prisma.userEducationalBackground.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserEducationalBackgroundUpdateManyArgs>(args: SelectSubset<T, UserEducationalBackgroundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEducationalBackgrounds and returns the data updated in the database.
     * @param {UserEducationalBackgroundUpdateManyAndReturnArgs} args - Arguments to update many UserEducationalBackgrounds.
     * @example
     * // Update many UserEducationalBackgrounds
     * const userEducationalBackground = await prisma.userEducationalBackground.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserEducationalBackgrounds and only return the `id`
     * const userEducationalBackgroundWithIdOnly = await prisma.userEducationalBackground.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserEducationalBackgroundUpdateManyAndReturnArgs>(args: SelectSubset<T, UserEducationalBackgroundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserEducationalBackground.
     * @param {UserEducationalBackgroundUpsertArgs} args - Arguments to update or create a UserEducationalBackground.
     * @example
     * // Update or create a UserEducationalBackground
     * const userEducationalBackground = await prisma.userEducationalBackground.upsert({
     *   create: {
     *     // ... data to create a UserEducationalBackground
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEducationalBackground we want to update
     *   }
     * })
     */
    upsert<T extends UserEducationalBackgroundUpsertArgs>(args: SelectSubset<T, UserEducationalBackgroundUpsertArgs<ExtArgs>>): Prisma__UserEducationalBackgroundClient<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserEducationalBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationalBackgroundCountArgs} args - Arguments to filter UserEducationalBackgrounds to count.
     * @example
     * // Count the number of UserEducationalBackgrounds
     * const count = await prisma.userEducationalBackground.count({
     *   where: {
     *     // ... the filter for the UserEducationalBackgrounds we want to count
     *   }
     * })
    **/
    count<T extends UserEducationalBackgroundCountArgs>(
      args?: Subset<T, UserEducationalBackgroundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserEducationalBackgroundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserEducationalBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationalBackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserEducationalBackgroundAggregateArgs>(args: Subset<T, UserEducationalBackgroundAggregateArgs>): Prisma.PrismaPromise<GetUserEducationalBackgroundAggregateType<T>>

    /**
     * Group by UserEducationalBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationalBackgroundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserEducationalBackgroundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserEducationalBackgroundGroupByArgs['orderBy'] }
        : { orderBy?: UserEducationalBackgroundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserEducationalBackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEducationalBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserEducationalBackground model
   */
  readonly fields: UserEducationalBackgroundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserEducationalBackground.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserEducationalBackgroundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserEducationalBackground model
   */
  interface UserEducationalBackgroundFieldRefs {
    readonly id: FieldRef<"UserEducationalBackground", 'Int'>
    readonly userId: FieldRef<"UserEducationalBackground", 'String'>
    readonly school: FieldRef<"UserEducationalBackground", 'String'>
    readonly level: FieldRef<"UserEducationalBackground", 'String'>
    readonly dateStart: FieldRef<"UserEducationalBackground", 'DateTime'>
    readonly dateEnd: FieldRef<"UserEducationalBackground", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserEducationalBackground findUnique
   */
  export type UserEducationalBackgroundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEducationalBackground to fetch.
     */
    where: UserEducationalBackgroundWhereUniqueInput
  }

  /**
   * UserEducationalBackground findUniqueOrThrow
   */
  export type UserEducationalBackgroundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEducationalBackground to fetch.
     */
    where: UserEducationalBackgroundWhereUniqueInput
  }

  /**
   * UserEducationalBackground findFirst
   */
  export type UserEducationalBackgroundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEducationalBackground to fetch.
     */
    where?: UserEducationalBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducationalBackgrounds to fetch.
     */
    orderBy?: UserEducationalBackgroundOrderByWithRelationInput | UserEducationalBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEducationalBackgrounds.
     */
    cursor?: UserEducationalBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducationalBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducationalBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEducationalBackgrounds.
     */
    distinct?: UserEducationalBackgroundScalarFieldEnum | UserEducationalBackgroundScalarFieldEnum[]
  }

  /**
   * UserEducationalBackground findFirstOrThrow
   */
  export type UserEducationalBackgroundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEducationalBackground to fetch.
     */
    where?: UserEducationalBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducationalBackgrounds to fetch.
     */
    orderBy?: UserEducationalBackgroundOrderByWithRelationInput | UserEducationalBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEducationalBackgrounds.
     */
    cursor?: UserEducationalBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducationalBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducationalBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEducationalBackgrounds.
     */
    distinct?: UserEducationalBackgroundScalarFieldEnum | UserEducationalBackgroundScalarFieldEnum[]
  }

  /**
   * UserEducationalBackground findMany
   */
  export type UserEducationalBackgroundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which UserEducationalBackgrounds to fetch.
     */
    where?: UserEducationalBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducationalBackgrounds to fetch.
     */
    orderBy?: UserEducationalBackgroundOrderByWithRelationInput | UserEducationalBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserEducationalBackgrounds.
     */
    cursor?: UserEducationalBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducationalBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducationalBackgrounds.
     */
    skip?: number
    distinct?: UserEducationalBackgroundScalarFieldEnum | UserEducationalBackgroundScalarFieldEnum[]
  }

  /**
   * UserEducationalBackground create
   */
  export type UserEducationalBackgroundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to create a UserEducationalBackground.
     */
    data: XOR<UserEducationalBackgroundCreateInput, UserEducationalBackgroundUncheckedCreateInput>
  }

  /**
   * UserEducationalBackground createMany
   */
  export type UserEducationalBackgroundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEducationalBackgrounds.
     */
    data: UserEducationalBackgroundCreateManyInput | UserEducationalBackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserEducationalBackground createManyAndReturn
   */
  export type UserEducationalBackgroundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * The data used to create many UserEducationalBackgrounds.
     */
    data: UserEducationalBackgroundCreateManyInput | UserEducationalBackgroundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEducationalBackground update
   */
  export type UserEducationalBackgroundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to update a UserEducationalBackground.
     */
    data: XOR<UserEducationalBackgroundUpdateInput, UserEducationalBackgroundUncheckedUpdateInput>
    /**
     * Choose, which UserEducationalBackground to update.
     */
    where: UserEducationalBackgroundWhereUniqueInput
  }

  /**
   * UserEducationalBackground updateMany
   */
  export type UserEducationalBackgroundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEducationalBackgrounds.
     */
    data: XOR<UserEducationalBackgroundUpdateManyMutationInput, UserEducationalBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which UserEducationalBackgrounds to update
     */
    where?: UserEducationalBackgroundWhereInput
    /**
     * Limit how many UserEducationalBackgrounds to update.
     */
    limit?: number
  }

  /**
   * UserEducationalBackground updateManyAndReturn
   */
  export type UserEducationalBackgroundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * The data used to update UserEducationalBackgrounds.
     */
    data: XOR<UserEducationalBackgroundUpdateManyMutationInput, UserEducationalBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which UserEducationalBackgrounds to update
     */
    where?: UserEducationalBackgroundWhereInput
    /**
     * Limit how many UserEducationalBackgrounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEducationalBackground upsert
   */
  export type UserEducationalBackgroundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * The filter to search for the UserEducationalBackground to update in case it exists.
     */
    where: UserEducationalBackgroundWhereUniqueInput
    /**
     * In case the UserEducationalBackground found by the `where` argument doesn't exist, create a new UserEducationalBackground with this data.
     */
    create: XOR<UserEducationalBackgroundCreateInput, UserEducationalBackgroundUncheckedCreateInput>
    /**
     * In case the UserEducationalBackground was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserEducationalBackgroundUpdateInput, UserEducationalBackgroundUncheckedUpdateInput>
  }

  /**
   * UserEducationalBackground delete
   */
  export type UserEducationalBackgroundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter which UserEducationalBackground to delete.
     */
    where: UserEducationalBackgroundWhereUniqueInput
  }

  /**
   * UserEducationalBackground deleteMany
   */
  export type UserEducationalBackgroundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEducationalBackgrounds to delete
     */
    where?: UserEducationalBackgroundWhereInput
    /**
     * Limit how many UserEducationalBackgrounds to delete.
     */
    limit?: number
  }

  /**
   * UserEducationalBackground without action
   */
  export type UserEducationalBackgroundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
  }


  /**
   * Model UserEmployementInfo
   */

  export type AggregateUserEmployementInfo = {
    _count: UserEmployementInfoCountAggregateOutputType | null
    _avg: UserEmployementInfoAvgAggregateOutputType | null
    _sum: UserEmployementInfoSumAggregateOutputType | null
    _min: UserEmployementInfoMinAggregateOutputType | null
    _max: UserEmployementInfoMaxAggregateOutputType | null
  }

  export type UserEmployementInfoAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    salary: Decimal | null
  }

  export type UserEmployementInfoSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    salary: Decimal | null
  }

  export type UserEmployementInfoMinAggregateOutputType = {
    id: number | null
    userId: string | null
    employeeId: number | null
    salary: Decimal | null
    dateRegularization: Date | null
    dateStart: Date | null
    dateEnd: Date | null
  }

  export type UserEmployementInfoMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    employeeId: number | null
    salary: Decimal | null
    dateRegularization: Date | null
    dateStart: Date | null
    dateEnd: Date | null
  }

  export type UserEmployementInfoCountAggregateOutputType = {
    id: number
    userId: number
    employeeId: number
    salary: number
    dateRegularization: number
    dateStart: number
    dateEnd: number
    _all: number
  }


  export type UserEmployementInfoAvgAggregateInputType = {
    id?: true
    employeeId?: true
    salary?: true
  }

  export type UserEmployementInfoSumAggregateInputType = {
    id?: true
    employeeId?: true
    salary?: true
  }

  export type UserEmployementInfoMinAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    salary?: true
    dateRegularization?: true
    dateStart?: true
    dateEnd?: true
  }

  export type UserEmployementInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    salary?: true
    dateRegularization?: true
    dateStart?: true
    dateEnd?: true
  }

  export type UserEmployementInfoCountAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    salary?: true
    dateRegularization?: true
    dateStart?: true
    dateEnd?: true
    _all?: true
  }

  export type UserEmployementInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEmployementInfo to aggregate.
     */
    where?: UserEmployementInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEmployementInfos to fetch.
     */
    orderBy?: UserEmployementInfoOrderByWithRelationInput | UserEmployementInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserEmployementInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEmployementInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEmployementInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserEmployementInfos
    **/
    _count?: true | UserEmployementInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserEmployementInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserEmployementInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserEmployementInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserEmployementInfoMaxAggregateInputType
  }

  export type GetUserEmployementInfoAggregateType<T extends UserEmployementInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserEmployementInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserEmployementInfo[P]>
      : GetScalarType<T[P], AggregateUserEmployementInfo[P]>
  }




  export type UserEmployementInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEmployementInfoWhereInput
    orderBy?: UserEmployementInfoOrderByWithAggregationInput | UserEmployementInfoOrderByWithAggregationInput[]
    by: UserEmployementInfoScalarFieldEnum[] | UserEmployementInfoScalarFieldEnum
    having?: UserEmployementInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserEmployementInfoCountAggregateInputType | true
    _avg?: UserEmployementInfoAvgAggregateInputType
    _sum?: UserEmployementInfoSumAggregateInputType
    _min?: UserEmployementInfoMinAggregateInputType
    _max?: UserEmployementInfoMaxAggregateInputType
  }

  export type UserEmployementInfoGroupByOutputType = {
    id: number
    userId: string
    employeeId: number
    salary: Decimal
    dateRegularization: Date
    dateStart: Date
    dateEnd: Date
    _count: UserEmployementInfoCountAggregateOutputType | null
    _avg: UserEmployementInfoAvgAggregateOutputType | null
    _sum: UserEmployementInfoSumAggregateOutputType | null
    _min: UserEmployementInfoMinAggregateOutputType | null
    _max: UserEmployementInfoMaxAggregateOutputType | null
  }

  type GetUserEmployementInfoGroupByPayload<T extends UserEmployementInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserEmployementInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserEmployementInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserEmployementInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserEmployementInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserEmployementInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    salary?: boolean
    dateRegularization?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEmployementInfo"]>

  export type UserEmployementInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    salary?: boolean
    dateRegularization?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEmployementInfo"]>

  export type UserEmployementInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    salary?: boolean
    dateRegularization?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEmployementInfo"]>

  export type UserEmployementInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    salary?: boolean
    dateRegularization?: boolean
    dateStart?: boolean
    dateEnd?: boolean
  }

  export type UserEmployementInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "employeeId" | "salary" | "dateRegularization" | "dateStart" | "dateEnd", ExtArgs["result"]["userEmployementInfo"]>
  export type UserEmployementInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserEmployementInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserEmployementInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserEmployementInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserEmployementInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      employeeId: number
      salary: Prisma.Decimal
      dateRegularization: Date
      dateStart: Date
      dateEnd: Date
    }, ExtArgs["result"]["userEmployementInfo"]>
    composites: {}
  }

  type UserEmployementInfoGetPayload<S extends boolean | null | undefined | UserEmployementInfoDefaultArgs> = $Result.GetResult<Prisma.$UserEmployementInfoPayload, S>

  type UserEmployementInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserEmployementInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserEmployementInfoCountAggregateInputType | true
    }

  export interface UserEmployementInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserEmployementInfo'], meta: { name: 'UserEmployementInfo' } }
    /**
     * Find zero or one UserEmployementInfo that matches the filter.
     * @param {UserEmployementInfoFindUniqueArgs} args - Arguments to find a UserEmployementInfo
     * @example
     * // Get one UserEmployementInfo
     * const userEmployementInfo = await prisma.userEmployementInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEmployementInfoFindUniqueArgs>(args: SelectSubset<T, UserEmployementInfoFindUniqueArgs<ExtArgs>>): Prisma__UserEmployementInfoClient<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserEmployementInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEmployementInfoFindUniqueOrThrowArgs} args - Arguments to find a UserEmployementInfo
     * @example
     * // Get one UserEmployementInfo
     * const userEmployementInfo = await prisma.userEmployementInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEmployementInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserEmployementInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserEmployementInfoClient<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEmployementInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmployementInfoFindFirstArgs} args - Arguments to find a UserEmployementInfo
     * @example
     * // Get one UserEmployementInfo
     * const userEmployementInfo = await prisma.userEmployementInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEmployementInfoFindFirstArgs>(args?: SelectSubset<T, UserEmployementInfoFindFirstArgs<ExtArgs>>): Prisma__UserEmployementInfoClient<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEmployementInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmployementInfoFindFirstOrThrowArgs} args - Arguments to find a UserEmployementInfo
     * @example
     * // Get one UserEmployementInfo
     * const userEmployementInfo = await prisma.userEmployementInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEmployementInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserEmployementInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserEmployementInfoClient<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEmployementInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmployementInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEmployementInfos
     * const userEmployementInfos = await prisma.userEmployementInfo.findMany()
     * 
     * // Get first 10 UserEmployementInfos
     * const userEmployementInfos = await prisma.userEmployementInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userEmployementInfoWithIdOnly = await prisma.userEmployementInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserEmployementInfoFindManyArgs>(args?: SelectSubset<T, UserEmployementInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserEmployementInfo.
     * @param {UserEmployementInfoCreateArgs} args - Arguments to create a UserEmployementInfo.
     * @example
     * // Create one UserEmployementInfo
     * const UserEmployementInfo = await prisma.userEmployementInfo.create({
     *   data: {
     *     // ... data to create a UserEmployementInfo
     *   }
     * })
     * 
     */
    create<T extends UserEmployementInfoCreateArgs>(args: SelectSubset<T, UserEmployementInfoCreateArgs<ExtArgs>>): Prisma__UserEmployementInfoClient<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserEmployementInfos.
     * @param {UserEmployementInfoCreateManyArgs} args - Arguments to create many UserEmployementInfos.
     * @example
     * // Create many UserEmployementInfos
     * const userEmployementInfo = await prisma.userEmployementInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserEmployementInfoCreateManyArgs>(args?: SelectSubset<T, UserEmployementInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserEmployementInfos and returns the data saved in the database.
     * @param {UserEmployementInfoCreateManyAndReturnArgs} args - Arguments to create many UserEmployementInfos.
     * @example
     * // Create many UserEmployementInfos
     * const userEmployementInfo = await prisma.userEmployementInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserEmployementInfos and only return the `id`
     * const userEmployementInfoWithIdOnly = await prisma.userEmployementInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserEmployementInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, UserEmployementInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserEmployementInfo.
     * @param {UserEmployementInfoDeleteArgs} args - Arguments to delete one UserEmployementInfo.
     * @example
     * // Delete one UserEmployementInfo
     * const UserEmployementInfo = await prisma.userEmployementInfo.delete({
     *   where: {
     *     // ... filter to delete one UserEmployementInfo
     *   }
     * })
     * 
     */
    delete<T extends UserEmployementInfoDeleteArgs>(args: SelectSubset<T, UserEmployementInfoDeleteArgs<ExtArgs>>): Prisma__UserEmployementInfoClient<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserEmployementInfo.
     * @param {UserEmployementInfoUpdateArgs} args - Arguments to update one UserEmployementInfo.
     * @example
     * // Update one UserEmployementInfo
     * const userEmployementInfo = await prisma.userEmployementInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserEmployementInfoUpdateArgs>(args: SelectSubset<T, UserEmployementInfoUpdateArgs<ExtArgs>>): Prisma__UserEmployementInfoClient<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserEmployementInfos.
     * @param {UserEmployementInfoDeleteManyArgs} args - Arguments to filter UserEmployementInfos to delete.
     * @example
     * // Delete a few UserEmployementInfos
     * const { count } = await prisma.userEmployementInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserEmployementInfoDeleteManyArgs>(args?: SelectSubset<T, UserEmployementInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEmployementInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmployementInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEmployementInfos
     * const userEmployementInfo = await prisma.userEmployementInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserEmployementInfoUpdateManyArgs>(args: SelectSubset<T, UserEmployementInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEmployementInfos and returns the data updated in the database.
     * @param {UserEmployementInfoUpdateManyAndReturnArgs} args - Arguments to update many UserEmployementInfos.
     * @example
     * // Update many UserEmployementInfos
     * const userEmployementInfo = await prisma.userEmployementInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserEmployementInfos and only return the `id`
     * const userEmployementInfoWithIdOnly = await prisma.userEmployementInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserEmployementInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, UserEmployementInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserEmployementInfo.
     * @param {UserEmployementInfoUpsertArgs} args - Arguments to update or create a UserEmployementInfo.
     * @example
     * // Update or create a UserEmployementInfo
     * const userEmployementInfo = await prisma.userEmployementInfo.upsert({
     *   create: {
     *     // ... data to create a UserEmployementInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEmployementInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserEmployementInfoUpsertArgs>(args: SelectSubset<T, UserEmployementInfoUpsertArgs<ExtArgs>>): Prisma__UserEmployementInfoClient<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserEmployementInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmployementInfoCountArgs} args - Arguments to filter UserEmployementInfos to count.
     * @example
     * // Count the number of UserEmployementInfos
     * const count = await prisma.userEmployementInfo.count({
     *   where: {
     *     // ... the filter for the UserEmployementInfos we want to count
     *   }
     * })
    **/
    count<T extends UserEmployementInfoCountArgs>(
      args?: Subset<T, UserEmployementInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserEmployementInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserEmployementInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmployementInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserEmployementInfoAggregateArgs>(args: Subset<T, UserEmployementInfoAggregateArgs>): Prisma.PrismaPromise<GetUserEmployementInfoAggregateType<T>>

    /**
     * Group by UserEmployementInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmployementInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserEmployementInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserEmployementInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserEmployementInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserEmployementInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEmployementInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserEmployementInfo model
   */
  readonly fields: UserEmployementInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserEmployementInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserEmployementInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserEmployementInfo model
   */
  interface UserEmployementInfoFieldRefs {
    readonly id: FieldRef<"UserEmployementInfo", 'Int'>
    readonly userId: FieldRef<"UserEmployementInfo", 'String'>
    readonly employeeId: FieldRef<"UserEmployementInfo", 'Int'>
    readonly salary: FieldRef<"UserEmployementInfo", 'Decimal'>
    readonly dateRegularization: FieldRef<"UserEmployementInfo", 'DateTime'>
    readonly dateStart: FieldRef<"UserEmployementInfo", 'DateTime'>
    readonly dateEnd: FieldRef<"UserEmployementInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserEmployementInfo findUnique
   */
  export type UserEmployementInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserEmployementInfo to fetch.
     */
    where: UserEmployementInfoWhereUniqueInput
  }

  /**
   * UserEmployementInfo findUniqueOrThrow
   */
  export type UserEmployementInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserEmployementInfo to fetch.
     */
    where: UserEmployementInfoWhereUniqueInput
  }

  /**
   * UserEmployementInfo findFirst
   */
  export type UserEmployementInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserEmployementInfo to fetch.
     */
    where?: UserEmployementInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEmployementInfos to fetch.
     */
    orderBy?: UserEmployementInfoOrderByWithRelationInput | UserEmployementInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEmployementInfos.
     */
    cursor?: UserEmployementInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEmployementInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEmployementInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEmployementInfos.
     */
    distinct?: UserEmployementInfoScalarFieldEnum | UserEmployementInfoScalarFieldEnum[]
  }

  /**
   * UserEmployementInfo findFirstOrThrow
   */
  export type UserEmployementInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserEmployementInfo to fetch.
     */
    where?: UserEmployementInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEmployementInfos to fetch.
     */
    orderBy?: UserEmployementInfoOrderByWithRelationInput | UserEmployementInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEmployementInfos.
     */
    cursor?: UserEmployementInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEmployementInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEmployementInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEmployementInfos.
     */
    distinct?: UserEmployementInfoScalarFieldEnum | UserEmployementInfoScalarFieldEnum[]
  }

  /**
   * UserEmployementInfo findMany
   */
  export type UserEmployementInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserEmployementInfos to fetch.
     */
    where?: UserEmployementInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEmployementInfos to fetch.
     */
    orderBy?: UserEmployementInfoOrderByWithRelationInput | UserEmployementInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserEmployementInfos.
     */
    cursor?: UserEmployementInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEmployementInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEmployementInfos.
     */
    skip?: number
    distinct?: UserEmployementInfoScalarFieldEnum | UserEmployementInfoScalarFieldEnum[]
  }

  /**
   * UserEmployementInfo create
   */
  export type UserEmployementInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserEmployementInfo.
     */
    data: XOR<UserEmployementInfoCreateInput, UserEmployementInfoUncheckedCreateInput>
  }

  /**
   * UserEmployementInfo createMany
   */
  export type UserEmployementInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEmployementInfos.
     */
    data: UserEmployementInfoCreateManyInput | UserEmployementInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserEmployementInfo createManyAndReturn
   */
  export type UserEmployementInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * The data used to create many UserEmployementInfos.
     */
    data: UserEmployementInfoCreateManyInput | UserEmployementInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEmployementInfo update
   */
  export type UserEmployementInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserEmployementInfo.
     */
    data: XOR<UserEmployementInfoUpdateInput, UserEmployementInfoUncheckedUpdateInput>
    /**
     * Choose, which UserEmployementInfo to update.
     */
    where: UserEmployementInfoWhereUniqueInput
  }

  /**
   * UserEmployementInfo updateMany
   */
  export type UserEmployementInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEmployementInfos.
     */
    data: XOR<UserEmployementInfoUpdateManyMutationInput, UserEmployementInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserEmployementInfos to update
     */
    where?: UserEmployementInfoWhereInput
    /**
     * Limit how many UserEmployementInfos to update.
     */
    limit?: number
  }

  /**
   * UserEmployementInfo updateManyAndReturn
   */
  export type UserEmployementInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * The data used to update UserEmployementInfos.
     */
    data: XOR<UserEmployementInfoUpdateManyMutationInput, UserEmployementInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserEmployementInfos to update
     */
    where?: UserEmployementInfoWhereInput
    /**
     * Limit how many UserEmployementInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEmployementInfo upsert
   */
  export type UserEmployementInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserEmployementInfo to update in case it exists.
     */
    where: UserEmployementInfoWhereUniqueInput
    /**
     * In case the UserEmployementInfo found by the `where` argument doesn't exist, create a new UserEmployementInfo with this data.
     */
    create: XOR<UserEmployementInfoCreateInput, UserEmployementInfoUncheckedCreateInput>
    /**
     * In case the UserEmployementInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserEmployementInfoUpdateInput, UserEmployementInfoUncheckedUpdateInput>
  }

  /**
   * UserEmployementInfo delete
   */
  export type UserEmployementInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    /**
     * Filter which UserEmployementInfo to delete.
     */
    where: UserEmployementInfoWhereUniqueInput
  }

  /**
   * UserEmployementInfo deleteMany
   */
  export type UserEmployementInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEmployementInfos to delete
     */
    where?: UserEmployementInfoWhereInput
    /**
     * Limit how many UserEmployementInfos to delete.
     */
    limit?: number
  }

  /**
   * UserEmployementInfo without action
   */
  export type UserEmployementInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    keycloakId: string | null
    email: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    keycloakId: string | null
    email: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    keycloakId: number
    email: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    keycloakId?: true
    email?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    keycloakId?: true
    email?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    keycloakId?: true
    email?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    keycloakId: string
    email: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keycloakId?: boolean
    email?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserBasicInfo?: boolean | User$UserBasicInfoArgs<ExtArgs>
    UserEmploymentBackground?: boolean | User$UserEmploymentBackgroundArgs<ExtArgs>
    UserEducationalBackground?: boolean | User$UserEducationalBackgroundArgs<ExtArgs>
    UserEmployementInfo?: boolean | User$UserEmployementInfoArgs<ExtArgs>
    UserBenefit?: boolean | User$UserBenefitArgs<ExtArgs>
    EmployeeType?: boolean | User$EmployeeTypeArgs<ExtArgs>
    Position?: boolean | User$PositionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keycloakId?: boolean
    email?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keycloakId?: boolean
    email?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    keycloakId?: boolean
    email?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keycloakId" | "email" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserBasicInfo?: boolean | User$UserBasicInfoArgs<ExtArgs>
    UserEmploymentBackground?: boolean | User$UserEmploymentBackgroundArgs<ExtArgs>
    UserEducationalBackground?: boolean | User$UserEducationalBackgroundArgs<ExtArgs>
    UserEmployementInfo?: boolean | User$UserEmployementInfoArgs<ExtArgs>
    UserBenefit?: boolean | User$UserBenefitArgs<ExtArgs>
    EmployeeType?: boolean | User$EmployeeTypeArgs<ExtArgs>
    Position?: boolean | User$PositionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserBasicInfo: Prisma.$UserBasicInfoPayload<ExtArgs>[]
      UserEmploymentBackground: Prisma.$UserEmploymentBackgroundPayload<ExtArgs>[]
      UserEducationalBackground: Prisma.$UserEducationalBackgroundPayload<ExtArgs>[]
      UserEmployementInfo: Prisma.$UserEmployementInfoPayload<ExtArgs>[]
      UserBenefit: Prisma.$UserBenefitPayload<ExtArgs>[]
      EmployeeType: Prisma.$EmployeeTypePayload<ExtArgs>[]
      Position: Prisma.$PositionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keycloakId: string
      email: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserBasicInfo<T extends User$UserBasicInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$UserBasicInfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBasicInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserEmploymentBackground<T extends User$UserEmploymentBackgroundArgs<ExtArgs> = {}>(args?: Subset<T, User$UserEmploymentBackgroundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEmploymentBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserEducationalBackground<T extends User$UserEducationalBackgroundArgs<ExtArgs> = {}>(args?: Subset<T, User$UserEducationalBackgroundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationalBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserEmployementInfo<T extends User$UserEmployementInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$UserEmployementInfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEmployementInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserBenefit<T extends User$UserBenefitArgs<ExtArgs> = {}>(args?: Subset<T, User$UserBenefitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EmployeeType<T extends User$EmployeeTypeArgs<ExtArgs> = {}>(args?: Subset<T, User$EmployeeTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Position<T extends User$PositionArgs<ExtArgs> = {}>(args?: Subset<T, User$PositionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly keycloakId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.UserBasicInfo
   */
  export type User$UserBasicInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBasicInfo
     */
    select?: UserBasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBasicInfo
     */
    omit?: UserBasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBasicInfoInclude<ExtArgs> | null
    where?: UserBasicInfoWhereInput
    orderBy?: UserBasicInfoOrderByWithRelationInput | UserBasicInfoOrderByWithRelationInput[]
    cursor?: UserBasicInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBasicInfoScalarFieldEnum | UserBasicInfoScalarFieldEnum[]
  }

  /**
   * User.UserEmploymentBackground
   */
  export type User$UserEmploymentBackgroundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmploymentBackground
     */
    select?: UserEmploymentBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmploymentBackground
     */
    omit?: UserEmploymentBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmploymentBackgroundInclude<ExtArgs> | null
    where?: UserEmploymentBackgroundWhereInput
    orderBy?: UserEmploymentBackgroundOrderByWithRelationInput | UserEmploymentBackgroundOrderByWithRelationInput[]
    cursor?: UserEmploymentBackgroundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEmploymentBackgroundScalarFieldEnum | UserEmploymentBackgroundScalarFieldEnum[]
  }

  /**
   * User.UserEducationalBackground
   */
  export type User$UserEducationalBackgroundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducationalBackground
     */
    select?: UserEducationalBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducationalBackground
     */
    omit?: UserEducationalBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationalBackgroundInclude<ExtArgs> | null
    where?: UserEducationalBackgroundWhereInput
    orderBy?: UserEducationalBackgroundOrderByWithRelationInput | UserEducationalBackgroundOrderByWithRelationInput[]
    cursor?: UserEducationalBackgroundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEducationalBackgroundScalarFieldEnum | UserEducationalBackgroundScalarFieldEnum[]
  }

  /**
   * User.UserEmployementInfo
   */
  export type User$UserEmployementInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmployementInfo
     */
    select?: UserEmployementInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEmployementInfo
     */
    omit?: UserEmployementInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEmployementInfoInclude<ExtArgs> | null
    where?: UserEmployementInfoWhereInput
    orderBy?: UserEmployementInfoOrderByWithRelationInput | UserEmployementInfoOrderByWithRelationInput[]
    cursor?: UserEmployementInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEmployementInfoScalarFieldEnum | UserEmployementInfoScalarFieldEnum[]
  }

  /**
   * User.UserBenefit
   */
  export type User$UserBenefitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    where?: UserBenefitWhereInput
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    cursor?: UserBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * User.EmployeeType
   */
  export type User$EmployeeTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeType
     */
    select?: EmployeeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeType
     */
    omit?: EmployeeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeTypeInclude<ExtArgs> | null
    where?: EmployeeTypeWhereInput
    orderBy?: EmployeeTypeOrderByWithRelationInput | EmployeeTypeOrderByWithRelationInput[]
    cursor?: EmployeeTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeTypeScalarFieldEnum | EmployeeTypeScalarFieldEnum[]
  }

  /**
   * User.Position
   */
  export type User$PositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    cursor?: PositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserBenefit
   */

  export type AggregateUserBenefit = {
    _count: UserBenefitCountAggregateOutputType | null
    _avg: UserBenefitAvgAggregateOutputType | null
    _sum: UserBenefitSumAggregateOutputType | null
    _min: UserBenefitMinAggregateOutputType | null
    _max: UserBenefitMaxAggregateOutputType | null
  }

  export type UserBenefitAvgAggregateOutputType = {
    benefitId: number | null
    amount: Decimal | null
  }

  export type UserBenefitSumAggregateOutputType = {
    benefitId: number | null
    amount: Decimal | null
  }

  export type UserBenefitMinAggregateOutputType = {
    userId: string | null
    benefitId: number | null
    amount: Decimal | null
  }

  export type UserBenefitMaxAggregateOutputType = {
    userId: string | null
    benefitId: number | null
    amount: Decimal | null
  }

  export type UserBenefitCountAggregateOutputType = {
    userId: number
    benefitId: number
    amount: number
    _all: number
  }


  export type UserBenefitAvgAggregateInputType = {
    benefitId?: true
    amount?: true
  }

  export type UserBenefitSumAggregateInputType = {
    benefitId?: true
    amount?: true
  }

  export type UserBenefitMinAggregateInputType = {
    userId?: true
    benefitId?: true
    amount?: true
  }

  export type UserBenefitMaxAggregateInputType = {
    userId?: true
    benefitId?: true
    amount?: true
  }

  export type UserBenefitCountAggregateInputType = {
    userId?: true
    benefitId?: true
    amount?: true
    _all?: true
  }

  export type UserBenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBenefit to aggregate.
     */
    where?: UserBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBenefits to fetch.
     */
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBenefits
    **/
    _count?: true | UserBenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBenefitMaxAggregateInputType
  }

  export type GetUserBenefitAggregateType<T extends UserBenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBenefit[P]>
      : GetScalarType<T[P], AggregateUserBenefit[P]>
  }




  export type UserBenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBenefitWhereInput
    orderBy?: UserBenefitOrderByWithAggregationInput | UserBenefitOrderByWithAggregationInput[]
    by: UserBenefitScalarFieldEnum[] | UserBenefitScalarFieldEnum
    having?: UserBenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBenefitCountAggregateInputType | true
    _avg?: UserBenefitAvgAggregateInputType
    _sum?: UserBenefitSumAggregateInputType
    _min?: UserBenefitMinAggregateInputType
    _max?: UserBenefitMaxAggregateInputType
  }

  export type UserBenefitGroupByOutputType = {
    userId: string
    benefitId: number
    amount: Decimal
    _count: UserBenefitCountAggregateOutputType | null
    _avg: UserBenefitAvgAggregateOutputType | null
    _sum: UserBenefitSumAggregateOutputType | null
    _min: UserBenefitMinAggregateOutputType | null
    _max: UserBenefitMaxAggregateOutputType | null
  }

  type GetUserBenefitGroupByPayload<T extends UserBenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBenefitGroupByOutputType[P]>
            : GetScalarType<T[P], UserBenefitGroupByOutputType[P]>
        }
      >
    >


  export type UserBenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    benefitId?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBenefit"]>

  export type UserBenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    benefitId?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBenefit"]>

  export type UserBenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    benefitId?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBenefit"]>

  export type UserBenefitSelectScalar = {
    userId?: boolean
    benefitId?: boolean
    amount?: boolean
  }

  export type UserBenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "benefitId" | "amount", ExtArgs["result"]["userBenefit"]>
  export type UserBenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }
  export type UserBenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }
  export type UserBenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }

  export type $UserBenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBenefit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      benefit: Prisma.$BenefitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      benefitId: number
      amount: Prisma.Decimal
    }, ExtArgs["result"]["userBenefit"]>
    composites: {}
  }

  type UserBenefitGetPayload<S extends boolean | null | undefined | UserBenefitDefaultArgs> = $Result.GetResult<Prisma.$UserBenefitPayload, S>

  type UserBenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBenefitCountAggregateInputType | true
    }

  export interface UserBenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBenefit'], meta: { name: 'UserBenefit' } }
    /**
     * Find zero or one UserBenefit that matches the filter.
     * @param {UserBenefitFindUniqueArgs} args - Arguments to find a UserBenefit
     * @example
     * // Get one UserBenefit
     * const userBenefit = await prisma.userBenefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBenefitFindUniqueArgs>(args: SelectSubset<T, UserBenefitFindUniqueArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBenefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBenefitFindUniqueOrThrowArgs} args - Arguments to find a UserBenefit
     * @example
     * // Get one UserBenefit
     * const userBenefit = await prisma.userBenefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBenefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitFindFirstArgs} args - Arguments to find a UserBenefit
     * @example
     * // Get one UserBenefit
     * const userBenefit = await prisma.userBenefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBenefitFindFirstArgs>(args?: SelectSubset<T, UserBenefitFindFirstArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBenefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitFindFirstOrThrowArgs} args - Arguments to find a UserBenefit
     * @example
     * // Get one UserBenefit
     * const userBenefit = await prisma.userBenefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBenefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBenefits
     * const userBenefits = await prisma.userBenefit.findMany()
     * 
     * // Get first 10 UserBenefits
     * const userBenefits = await prisma.userBenefit.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userBenefitWithUserIdOnly = await prisma.userBenefit.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserBenefitFindManyArgs>(args?: SelectSubset<T, UserBenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBenefit.
     * @param {UserBenefitCreateArgs} args - Arguments to create a UserBenefit.
     * @example
     * // Create one UserBenefit
     * const UserBenefit = await prisma.userBenefit.create({
     *   data: {
     *     // ... data to create a UserBenefit
     *   }
     * })
     * 
     */
    create<T extends UserBenefitCreateArgs>(args: SelectSubset<T, UserBenefitCreateArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBenefits.
     * @param {UserBenefitCreateManyArgs} args - Arguments to create many UserBenefits.
     * @example
     * // Create many UserBenefits
     * const userBenefit = await prisma.userBenefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBenefitCreateManyArgs>(args?: SelectSubset<T, UserBenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBenefits and returns the data saved in the database.
     * @param {UserBenefitCreateManyAndReturnArgs} args - Arguments to create many UserBenefits.
     * @example
     * // Create many UserBenefits
     * const userBenefit = await prisma.userBenefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBenefits and only return the `userId`
     * const userBenefitWithUserIdOnly = await prisma.userBenefit.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBenefit.
     * @param {UserBenefitDeleteArgs} args - Arguments to delete one UserBenefit.
     * @example
     * // Delete one UserBenefit
     * const UserBenefit = await prisma.userBenefit.delete({
     *   where: {
     *     // ... filter to delete one UserBenefit
     *   }
     * })
     * 
     */
    delete<T extends UserBenefitDeleteArgs>(args: SelectSubset<T, UserBenefitDeleteArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBenefit.
     * @param {UserBenefitUpdateArgs} args - Arguments to update one UserBenefit.
     * @example
     * // Update one UserBenefit
     * const userBenefit = await prisma.userBenefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBenefitUpdateArgs>(args: SelectSubset<T, UserBenefitUpdateArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBenefits.
     * @param {UserBenefitDeleteManyArgs} args - Arguments to filter UserBenefits to delete.
     * @example
     * // Delete a few UserBenefits
     * const { count } = await prisma.userBenefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBenefitDeleteManyArgs>(args?: SelectSubset<T, UserBenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBenefits
     * const userBenefit = await prisma.userBenefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBenefitUpdateManyArgs>(args: SelectSubset<T, UserBenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBenefits and returns the data updated in the database.
     * @param {UserBenefitUpdateManyAndReturnArgs} args - Arguments to update many UserBenefits.
     * @example
     * // Update many UserBenefits
     * const userBenefit = await prisma.userBenefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBenefits and only return the `userId`
     * const userBenefitWithUserIdOnly = await prisma.userBenefit.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBenefit.
     * @param {UserBenefitUpsertArgs} args - Arguments to update or create a UserBenefit.
     * @example
     * // Update or create a UserBenefit
     * const userBenefit = await prisma.userBenefit.upsert({
     *   create: {
     *     // ... data to create a UserBenefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBenefit we want to update
     *   }
     * })
     */
    upsert<T extends UserBenefitUpsertArgs>(args: SelectSubset<T, UserBenefitUpsertArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitCountArgs} args - Arguments to filter UserBenefits to count.
     * @example
     * // Count the number of UserBenefits
     * const count = await prisma.userBenefit.count({
     *   where: {
     *     // ... the filter for the UserBenefits we want to count
     *   }
     * })
    **/
    count<T extends UserBenefitCountArgs>(
      args?: Subset<T, UserBenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBenefitAggregateArgs>(args: Subset<T, UserBenefitAggregateArgs>): Prisma.PrismaPromise<GetUserBenefitAggregateType<T>>

    /**
     * Group by UserBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBenefitGroupByArgs['orderBy'] }
        : { orderBy?: UserBenefitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBenefit model
   */
  readonly fields: UserBenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBenefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    benefit<T extends BenefitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BenefitDefaultArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBenefit model
   */
  interface UserBenefitFieldRefs {
    readonly userId: FieldRef<"UserBenefit", 'String'>
    readonly benefitId: FieldRef<"UserBenefit", 'Int'>
    readonly amount: FieldRef<"UserBenefit", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * UserBenefit findUnique
   */
  export type UserBenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefit to fetch.
     */
    where: UserBenefitWhereUniqueInput
  }

  /**
   * UserBenefit findUniqueOrThrow
   */
  export type UserBenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefit to fetch.
     */
    where: UserBenefitWhereUniqueInput
  }

  /**
   * UserBenefit findFirst
   */
  export type UserBenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefit to fetch.
     */
    where?: UserBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBenefits to fetch.
     */
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBenefits.
     */
    cursor?: UserBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBenefits.
     */
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * UserBenefit findFirstOrThrow
   */
  export type UserBenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefit to fetch.
     */
    where?: UserBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBenefits to fetch.
     */
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBenefits.
     */
    cursor?: UserBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBenefits.
     */
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * UserBenefit findMany
   */
  export type UserBenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefits to fetch.
     */
    where?: UserBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBenefits to fetch.
     */
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBenefits.
     */
    cursor?: UserBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBenefits.
     */
    skip?: number
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * UserBenefit create
   */
  export type UserBenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBenefit.
     */
    data: XOR<UserBenefitCreateInput, UserBenefitUncheckedCreateInput>
  }

  /**
   * UserBenefit createMany
   */
  export type UserBenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBenefits.
     */
    data: UserBenefitCreateManyInput | UserBenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBenefit createManyAndReturn
   */
  export type UserBenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * The data used to create many UserBenefits.
     */
    data: UserBenefitCreateManyInput | UserBenefitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBenefit update
   */
  export type UserBenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBenefit.
     */
    data: XOR<UserBenefitUpdateInput, UserBenefitUncheckedUpdateInput>
    /**
     * Choose, which UserBenefit to update.
     */
    where: UserBenefitWhereUniqueInput
  }

  /**
   * UserBenefit updateMany
   */
  export type UserBenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBenefits.
     */
    data: XOR<UserBenefitUpdateManyMutationInput, UserBenefitUncheckedUpdateManyInput>
    /**
     * Filter which UserBenefits to update
     */
    where?: UserBenefitWhereInput
    /**
     * Limit how many UserBenefits to update.
     */
    limit?: number
  }

  /**
   * UserBenefit updateManyAndReturn
   */
  export type UserBenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * The data used to update UserBenefits.
     */
    data: XOR<UserBenefitUpdateManyMutationInput, UserBenefitUncheckedUpdateManyInput>
    /**
     * Filter which UserBenefits to update
     */
    where?: UserBenefitWhereInput
    /**
     * Limit how many UserBenefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBenefit upsert
   */
  export type UserBenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBenefit to update in case it exists.
     */
    where: UserBenefitWhereUniqueInput
    /**
     * In case the UserBenefit found by the `where` argument doesn't exist, create a new UserBenefit with this data.
     */
    create: XOR<UserBenefitCreateInput, UserBenefitUncheckedCreateInput>
    /**
     * In case the UserBenefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBenefitUpdateInput, UserBenefitUncheckedUpdateInput>
  }

  /**
   * UserBenefit delete
   */
  export type UserBenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter which UserBenefit to delete.
     */
    where: UserBenefitWhereUniqueInput
  }

  /**
   * UserBenefit deleteMany
   */
  export type UserBenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBenefits to delete
     */
    where?: UserBenefitWhereInput
    /**
     * Limit how many UserBenefits to delete.
     */
    limit?: number
  }

  /**
   * UserBenefit without action
   */
  export type UserBenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BenefitScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    type: 'type',
    active: 'active',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BenefitScalarFieldEnum = (typeof BenefitScalarFieldEnum)[keyof typeof BenefitScalarFieldEnum]


  export const EmployeeTypeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    active: 'active',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeTypeScalarFieldEnum = (typeof EmployeeTypeScalarFieldEnum)[keyof typeof EmployeeTypeScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    active: 'active',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    active: 'active',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserBasicInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    birthdate: 'birthdate',
    mobileNumber: 'mobileNumber',
    maritalStatus: 'maritalStatus',
    gender: 'gender',
    nationality: 'nationality',
    provinceCode: 'provinceCode',
    cityCode: 'cityCode',
    brangayCode: 'brangayCode',
    zipCode: 'zipCode',
    address: 'address'
  };

  export type UserBasicInfoScalarFieldEnum = (typeof UserBasicInfoScalarFieldEnum)[keyof typeof UserBasicInfoScalarFieldEnum]


  export const UserEmploymentBackgroundScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    company: 'company',
    position: 'position',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd'
  };

  export type UserEmploymentBackgroundScalarFieldEnum = (typeof UserEmploymentBackgroundScalarFieldEnum)[keyof typeof UserEmploymentBackgroundScalarFieldEnum]


  export const UserEducationalBackgroundScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    school: 'school',
    level: 'level',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd'
  };

  export type UserEducationalBackgroundScalarFieldEnum = (typeof UserEducationalBackgroundScalarFieldEnum)[keyof typeof UserEducationalBackgroundScalarFieldEnum]


  export const UserEmployementInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    employeeId: 'employeeId',
    salary: 'salary',
    dateRegularization: 'dateRegularization',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd'
  };

  export type UserEmployementInfoScalarFieldEnum = (typeof UserEmployementInfoScalarFieldEnum)[keyof typeof UserEmployementInfoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    keycloakId: 'keycloakId',
    email: 'email',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserBenefitScalarFieldEnum: {
    userId: 'userId',
    benefitId: 'benefitId',
    amount: 'amount'
  };

  export type UserBenefitScalarFieldEnum = (typeof UserBenefitScalarFieldEnum)[keyof typeof UserBenefitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BenefitType'
   */
  export type EnumBenefitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BenefitType'>
    


  /**
   * Reference to a field of type 'BenefitType[]'
   */
  export type ListEnumBenefitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BenefitType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Nationality'
   */
  export type EnumNationalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Nationality'>
    


  /**
   * Reference to a field of type 'Nationality[]'
   */
  export type ListEnumNationalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Nationality[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BenefitWhereInput = {
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    id?: IntFilter<"Benefit"> | number
    code?: StringFilter<"Benefit"> | string
    name?: StringFilter<"Benefit"> | string
    type?: EnumBenefitTypeFilter<"Benefit"> | $Enums.BenefitType
    active?: BoolFilter<"Benefit"> | boolean
    description?: StringNullableFilter<"Benefit"> | string | null
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    userAllowance?: UserBenefitListRelationFilter
  }

  export type BenefitOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAllowance?: UserBenefitOrderByRelationAggregateInput
  }

  export type BenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    name?: string
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    type?: EnumBenefitTypeFilter<"Benefit"> | $Enums.BenefitType
    active?: BoolFilter<"Benefit"> | boolean
    description?: StringNullableFilter<"Benefit"> | string | null
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    userAllowance?: UserBenefitListRelationFilter
  }, "id" | "code" | "name">

  export type BenefitOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BenefitCountOrderByAggregateInput
    _avg?: BenefitAvgOrderByAggregateInput
    _max?: BenefitMaxOrderByAggregateInput
    _min?: BenefitMinOrderByAggregateInput
    _sum?: BenefitSumOrderByAggregateInput
  }

  export type BenefitScalarWhereWithAggregatesInput = {
    AND?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    OR?: BenefitScalarWhereWithAggregatesInput[]
    NOT?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Benefit"> | number
    code?: StringWithAggregatesFilter<"Benefit"> | string
    name?: StringWithAggregatesFilter<"Benefit"> | string
    type?: EnumBenefitTypeWithAggregatesFilter<"Benefit"> | $Enums.BenefitType
    active?: BoolWithAggregatesFilter<"Benefit"> | boolean
    description?: StringNullableWithAggregatesFilter<"Benefit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
  }

  export type EmployeeTypeWhereInput = {
    AND?: EmployeeTypeWhereInput | EmployeeTypeWhereInput[]
    OR?: EmployeeTypeWhereInput[]
    NOT?: EmployeeTypeWhereInput | EmployeeTypeWhereInput[]
    id?: IntFilter<"EmployeeType"> | number
    code?: StringFilter<"EmployeeType"> | string
    name?: StringFilter<"EmployeeType"> | string
    active?: BoolFilter<"EmployeeType"> | boolean
    description?: StringNullableFilter<"EmployeeType"> | string | null
    createdAt?: DateTimeFilter<"EmployeeType"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeType"> | Date | string
    user?: UserListRelationFilter
  }

  export type EmployeeTypeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type EmployeeTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    name?: string
    AND?: EmployeeTypeWhereInput | EmployeeTypeWhereInput[]
    OR?: EmployeeTypeWhereInput[]
    NOT?: EmployeeTypeWhereInput | EmployeeTypeWhereInput[]
    active?: BoolFilter<"EmployeeType"> | boolean
    description?: StringNullableFilter<"EmployeeType"> | string | null
    createdAt?: DateTimeFilter<"EmployeeType"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeType"> | Date | string
    user?: UserListRelationFilter
  }, "id" | "code" | "name">

  export type EmployeeTypeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeTypeCountOrderByAggregateInput
    _avg?: EmployeeTypeAvgOrderByAggregateInput
    _max?: EmployeeTypeMaxOrderByAggregateInput
    _min?: EmployeeTypeMinOrderByAggregateInput
    _sum?: EmployeeTypeSumOrderByAggregateInput
  }

  export type EmployeeTypeScalarWhereWithAggregatesInput = {
    AND?: EmployeeTypeScalarWhereWithAggregatesInput | EmployeeTypeScalarWhereWithAggregatesInput[]
    OR?: EmployeeTypeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeTypeScalarWhereWithAggregatesInput | EmployeeTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmployeeType"> | number
    code?: StringWithAggregatesFilter<"EmployeeType"> | string
    name?: StringWithAggregatesFilter<"EmployeeType"> | string
    active?: BoolWithAggregatesFilter<"EmployeeType"> | boolean
    description?: StringNullableWithAggregatesFilter<"EmployeeType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeType"> | Date | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    id?: IntFilter<"Position"> | number
    code?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    active?: BoolFilter<"Position"> | boolean
    description?: StringNullableFilter<"Position"> | string | null
    createdAt?: DateTimeFilter<"Position"> | Date | string
    updatedAt?: DateTimeFilter<"Position"> | Date | string
    user?: UserListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    name?: string
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    active?: BoolFilter<"Position"> | boolean
    description?: StringNullableFilter<"Position"> | string | null
    createdAt?: DateTimeFilter<"Position"> | Date | string
    updatedAt?: DateTimeFilter<"Position"> | Date | string
    user?: UserListRelationFilter
  }, "id" | "code" | "name">

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Position"> | number
    code?: StringWithAggregatesFilter<"Position"> | string
    name?: StringWithAggregatesFilter<"Position"> | string
    active?: BoolWithAggregatesFilter<"Position"> | boolean
    description?: StringNullableWithAggregatesFilter<"Position"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Position"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Position"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    code?: StringFilter<"Task"> | string
    name?: StringFilter<"Task"> | string
    active?: BoolFilter<"Task"> | boolean
    description?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    name?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    active?: BoolFilter<"Task"> | boolean
    description?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }, "id" | "code" | "name">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    code?: StringWithAggregatesFilter<"Task"> | string
    name?: StringWithAggregatesFilter<"Task"> | string
    active?: BoolWithAggregatesFilter<"Task"> | boolean
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type UserBasicInfoWhereInput = {
    AND?: UserBasicInfoWhereInput | UserBasicInfoWhereInput[]
    OR?: UserBasicInfoWhereInput[]
    NOT?: UserBasicInfoWhereInput | UserBasicInfoWhereInput[]
    id?: IntFilter<"UserBasicInfo"> | number
    userId?: StringFilter<"UserBasicInfo"> | string
    firstName?: StringFilter<"UserBasicInfo"> | string
    middleName?: StringFilter<"UserBasicInfo"> | string
    lastName?: StringFilter<"UserBasicInfo"> | string
    birthdate?: DateTimeFilter<"UserBasicInfo"> | Date | string
    mobileNumber?: StringFilter<"UserBasicInfo"> | string
    maritalStatus?: EnumMaritalStatusFilter<"UserBasicInfo"> | $Enums.MaritalStatus
    gender?: EnumGenderFilter<"UserBasicInfo"> | $Enums.Gender
    nationality?: EnumNationalityFilter<"UserBasicInfo"> | $Enums.Nationality
    provinceCode?: StringFilter<"UserBasicInfo"> | string
    cityCode?: StringFilter<"UserBasicInfo"> | string
    brangayCode?: StringFilter<"UserBasicInfo"> | string
    zipCode?: StringFilter<"UserBasicInfo"> | string
    address?: StringFilter<"UserBasicInfo"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserBasicInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    birthdate?: SortOrder
    mobileNumber?: SortOrder
    maritalStatus?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    brangayCode?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserBasicInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mobileNumber?: string
    AND?: UserBasicInfoWhereInput | UserBasicInfoWhereInput[]
    OR?: UserBasicInfoWhereInput[]
    NOT?: UserBasicInfoWhereInput | UserBasicInfoWhereInput[]
    userId?: StringFilter<"UserBasicInfo"> | string
    firstName?: StringFilter<"UserBasicInfo"> | string
    middleName?: StringFilter<"UserBasicInfo"> | string
    lastName?: StringFilter<"UserBasicInfo"> | string
    birthdate?: DateTimeFilter<"UserBasicInfo"> | Date | string
    maritalStatus?: EnumMaritalStatusFilter<"UserBasicInfo"> | $Enums.MaritalStatus
    gender?: EnumGenderFilter<"UserBasicInfo"> | $Enums.Gender
    nationality?: EnumNationalityFilter<"UserBasicInfo"> | $Enums.Nationality
    provinceCode?: StringFilter<"UserBasicInfo"> | string
    cityCode?: StringFilter<"UserBasicInfo"> | string
    brangayCode?: StringFilter<"UserBasicInfo"> | string
    zipCode?: StringFilter<"UserBasicInfo"> | string
    address?: StringFilter<"UserBasicInfo"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "mobileNumber">

  export type UserBasicInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    birthdate?: SortOrder
    mobileNumber?: SortOrder
    maritalStatus?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    brangayCode?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
    _count?: UserBasicInfoCountOrderByAggregateInput
    _avg?: UserBasicInfoAvgOrderByAggregateInput
    _max?: UserBasicInfoMaxOrderByAggregateInput
    _min?: UserBasicInfoMinOrderByAggregateInput
    _sum?: UserBasicInfoSumOrderByAggregateInput
  }

  export type UserBasicInfoScalarWhereWithAggregatesInput = {
    AND?: UserBasicInfoScalarWhereWithAggregatesInput | UserBasicInfoScalarWhereWithAggregatesInput[]
    OR?: UserBasicInfoScalarWhereWithAggregatesInput[]
    NOT?: UserBasicInfoScalarWhereWithAggregatesInput | UserBasicInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserBasicInfo"> | number
    userId?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    firstName?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    middleName?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    lastName?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    birthdate?: DateTimeWithAggregatesFilter<"UserBasicInfo"> | Date | string
    mobileNumber?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    maritalStatus?: EnumMaritalStatusWithAggregatesFilter<"UserBasicInfo"> | $Enums.MaritalStatus
    gender?: EnumGenderWithAggregatesFilter<"UserBasicInfo"> | $Enums.Gender
    nationality?: EnumNationalityWithAggregatesFilter<"UserBasicInfo"> | $Enums.Nationality
    provinceCode?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    cityCode?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    brangayCode?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    zipCode?: StringWithAggregatesFilter<"UserBasicInfo"> | string
    address?: StringWithAggregatesFilter<"UserBasicInfo"> | string
  }

  export type UserEmploymentBackgroundWhereInput = {
    AND?: UserEmploymentBackgroundWhereInput | UserEmploymentBackgroundWhereInput[]
    OR?: UserEmploymentBackgroundWhereInput[]
    NOT?: UserEmploymentBackgroundWhereInput | UserEmploymentBackgroundWhereInput[]
    id?: IntFilter<"UserEmploymentBackground"> | number
    userId?: StringFilter<"UserEmploymentBackground"> | string
    company?: StringFilter<"UserEmploymentBackground"> | string
    position?: StringFilter<"UserEmploymentBackground"> | string
    dateStart?: DateTimeFilter<"UserEmploymentBackground"> | Date | string
    dateEnd?: DateTimeFilter<"UserEmploymentBackground"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserEmploymentBackgroundOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserEmploymentBackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserEmploymentBackgroundWhereInput | UserEmploymentBackgroundWhereInput[]
    OR?: UserEmploymentBackgroundWhereInput[]
    NOT?: UserEmploymentBackgroundWhereInput | UserEmploymentBackgroundWhereInput[]
    userId?: StringFilter<"UserEmploymentBackground"> | string
    company?: StringFilter<"UserEmploymentBackground"> | string
    position?: StringFilter<"UserEmploymentBackground"> | string
    dateStart?: DateTimeFilter<"UserEmploymentBackground"> | Date | string
    dateEnd?: DateTimeFilter<"UserEmploymentBackground"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserEmploymentBackgroundOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    _count?: UserEmploymentBackgroundCountOrderByAggregateInput
    _avg?: UserEmploymentBackgroundAvgOrderByAggregateInput
    _max?: UserEmploymentBackgroundMaxOrderByAggregateInput
    _min?: UserEmploymentBackgroundMinOrderByAggregateInput
    _sum?: UserEmploymentBackgroundSumOrderByAggregateInput
  }

  export type UserEmploymentBackgroundScalarWhereWithAggregatesInput = {
    AND?: UserEmploymentBackgroundScalarWhereWithAggregatesInput | UserEmploymentBackgroundScalarWhereWithAggregatesInput[]
    OR?: UserEmploymentBackgroundScalarWhereWithAggregatesInput[]
    NOT?: UserEmploymentBackgroundScalarWhereWithAggregatesInput | UserEmploymentBackgroundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserEmploymentBackground"> | number
    userId?: StringWithAggregatesFilter<"UserEmploymentBackground"> | string
    company?: StringWithAggregatesFilter<"UserEmploymentBackground"> | string
    position?: StringWithAggregatesFilter<"UserEmploymentBackground"> | string
    dateStart?: DateTimeWithAggregatesFilter<"UserEmploymentBackground"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"UserEmploymentBackground"> | Date | string
  }

  export type UserEducationalBackgroundWhereInput = {
    AND?: UserEducationalBackgroundWhereInput | UserEducationalBackgroundWhereInput[]
    OR?: UserEducationalBackgroundWhereInput[]
    NOT?: UserEducationalBackgroundWhereInput | UserEducationalBackgroundWhereInput[]
    id?: IntFilter<"UserEducationalBackground"> | number
    userId?: StringFilter<"UserEducationalBackground"> | string
    school?: StringFilter<"UserEducationalBackground"> | string
    level?: StringFilter<"UserEducationalBackground"> | string
    dateStart?: DateTimeFilter<"UserEducationalBackground"> | Date | string
    dateEnd?: DateTimeFilter<"UserEducationalBackground"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserEducationalBackgroundOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    school?: SortOrder
    level?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserEducationalBackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserEducationalBackgroundWhereInput | UserEducationalBackgroundWhereInput[]
    OR?: UserEducationalBackgroundWhereInput[]
    NOT?: UserEducationalBackgroundWhereInput | UserEducationalBackgroundWhereInput[]
    userId?: StringFilter<"UserEducationalBackground"> | string
    school?: StringFilter<"UserEducationalBackground"> | string
    level?: StringFilter<"UserEducationalBackground"> | string
    dateStart?: DateTimeFilter<"UserEducationalBackground"> | Date | string
    dateEnd?: DateTimeFilter<"UserEducationalBackground"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserEducationalBackgroundOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    school?: SortOrder
    level?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    _count?: UserEducationalBackgroundCountOrderByAggregateInput
    _avg?: UserEducationalBackgroundAvgOrderByAggregateInput
    _max?: UserEducationalBackgroundMaxOrderByAggregateInput
    _min?: UserEducationalBackgroundMinOrderByAggregateInput
    _sum?: UserEducationalBackgroundSumOrderByAggregateInput
  }

  export type UserEducationalBackgroundScalarWhereWithAggregatesInput = {
    AND?: UserEducationalBackgroundScalarWhereWithAggregatesInput | UserEducationalBackgroundScalarWhereWithAggregatesInput[]
    OR?: UserEducationalBackgroundScalarWhereWithAggregatesInput[]
    NOT?: UserEducationalBackgroundScalarWhereWithAggregatesInput | UserEducationalBackgroundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserEducationalBackground"> | number
    userId?: StringWithAggregatesFilter<"UserEducationalBackground"> | string
    school?: StringWithAggregatesFilter<"UserEducationalBackground"> | string
    level?: StringWithAggregatesFilter<"UserEducationalBackground"> | string
    dateStart?: DateTimeWithAggregatesFilter<"UserEducationalBackground"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"UserEducationalBackground"> | Date | string
  }

  export type UserEmployementInfoWhereInput = {
    AND?: UserEmployementInfoWhereInput | UserEmployementInfoWhereInput[]
    OR?: UserEmployementInfoWhereInput[]
    NOT?: UserEmployementInfoWhereInput | UserEmployementInfoWhereInput[]
    id?: IntFilter<"UserEmployementInfo"> | number
    userId?: StringFilter<"UserEmployementInfo"> | string
    employeeId?: IntFilter<"UserEmployementInfo"> | number
    salary?: DecimalFilter<"UserEmployementInfo"> | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFilter<"UserEmployementInfo"> | Date | string
    dateStart?: DateTimeFilter<"UserEmployementInfo"> | Date | string
    dateEnd?: DateTimeFilter<"UserEmployementInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserEmployementInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
    dateRegularization?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserEmployementInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employeeId?: number
    AND?: UserEmployementInfoWhereInput | UserEmployementInfoWhereInput[]
    OR?: UserEmployementInfoWhereInput[]
    NOT?: UserEmployementInfoWhereInput | UserEmployementInfoWhereInput[]
    userId?: StringFilter<"UserEmployementInfo"> | string
    salary?: DecimalFilter<"UserEmployementInfo"> | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFilter<"UserEmployementInfo"> | Date | string
    dateStart?: DateTimeFilter<"UserEmployementInfo"> | Date | string
    dateEnd?: DateTimeFilter<"UserEmployementInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "employeeId">

  export type UserEmployementInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
    dateRegularization?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    _count?: UserEmployementInfoCountOrderByAggregateInput
    _avg?: UserEmployementInfoAvgOrderByAggregateInput
    _max?: UserEmployementInfoMaxOrderByAggregateInput
    _min?: UserEmployementInfoMinOrderByAggregateInput
    _sum?: UserEmployementInfoSumOrderByAggregateInput
  }

  export type UserEmployementInfoScalarWhereWithAggregatesInput = {
    AND?: UserEmployementInfoScalarWhereWithAggregatesInput | UserEmployementInfoScalarWhereWithAggregatesInput[]
    OR?: UserEmployementInfoScalarWhereWithAggregatesInput[]
    NOT?: UserEmployementInfoScalarWhereWithAggregatesInput | UserEmployementInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserEmployementInfo"> | number
    userId?: StringWithAggregatesFilter<"UserEmployementInfo"> | string
    employeeId?: IntWithAggregatesFilter<"UserEmployementInfo"> | number
    salary?: DecimalWithAggregatesFilter<"UserEmployementInfo"> | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeWithAggregatesFilter<"UserEmployementInfo"> | Date | string
    dateStart?: DateTimeWithAggregatesFilter<"UserEmployementInfo"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"UserEmployementInfo"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    keycloakId?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserBasicInfo?: UserBasicInfoListRelationFilter
    UserEmploymentBackground?: UserEmploymentBackgroundListRelationFilter
    UserEducationalBackground?: UserEducationalBackgroundListRelationFilter
    UserEmployementInfo?: UserEmployementInfoListRelationFilter
    UserBenefit?: UserBenefitListRelationFilter
    EmployeeType?: EmployeeTypeListRelationFilter
    Position?: PositionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    keycloakId?: SortOrder
    email?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserBasicInfo?: UserBasicInfoOrderByRelationAggregateInput
    UserEmploymentBackground?: UserEmploymentBackgroundOrderByRelationAggregateInput
    UserEducationalBackground?: UserEducationalBackgroundOrderByRelationAggregateInput
    UserEmployementInfo?: UserEmployementInfoOrderByRelationAggregateInput
    UserBenefit?: UserBenefitOrderByRelationAggregateInput
    EmployeeType?: EmployeeTypeOrderByRelationAggregateInput
    Position?: PositionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keycloakId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserBasicInfo?: UserBasicInfoListRelationFilter
    UserEmploymentBackground?: UserEmploymentBackgroundListRelationFilter
    UserEducationalBackground?: UserEducationalBackgroundListRelationFilter
    UserEmployementInfo?: UserEmployementInfoListRelationFilter
    UserBenefit?: UserBenefitListRelationFilter
    EmployeeType?: EmployeeTypeListRelationFilter
    Position?: PositionListRelationFilter
  }, "id" | "keycloakId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    keycloakId?: SortOrder
    email?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    keycloakId?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserBenefitWhereInput = {
    AND?: UserBenefitWhereInput | UserBenefitWhereInput[]
    OR?: UserBenefitWhereInput[]
    NOT?: UserBenefitWhereInput | UserBenefitWhereInput[]
    userId?: StringFilter<"UserBenefit"> | string
    benefitId?: IntFilter<"UserBenefit"> | number
    amount?: DecimalFilter<"UserBenefit"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
  }

  export type UserBenefitOrderByWithRelationInput = {
    userId?: SortOrder
    benefitId?: SortOrder
    amount?: SortOrder
    user?: UserOrderByWithRelationInput
    benefit?: BenefitOrderByWithRelationInput
  }

  export type UserBenefitWhereUniqueInput = Prisma.AtLeast<{
    userId_benefitId?: UserBenefitUserIdBenefitIdCompoundUniqueInput
    AND?: UserBenefitWhereInput | UserBenefitWhereInput[]
    OR?: UserBenefitWhereInput[]
    NOT?: UserBenefitWhereInput | UserBenefitWhereInput[]
    userId?: StringFilter<"UserBenefit"> | string
    benefitId?: IntFilter<"UserBenefit"> | number
    amount?: DecimalFilter<"UserBenefit"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
  }, "userId_benefitId">

  export type UserBenefitOrderByWithAggregationInput = {
    userId?: SortOrder
    benefitId?: SortOrder
    amount?: SortOrder
    _count?: UserBenefitCountOrderByAggregateInput
    _avg?: UserBenefitAvgOrderByAggregateInput
    _max?: UserBenefitMaxOrderByAggregateInput
    _min?: UserBenefitMinOrderByAggregateInput
    _sum?: UserBenefitSumOrderByAggregateInput
  }

  export type UserBenefitScalarWhereWithAggregatesInput = {
    AND?: UserBenefitScalarWhereWithAggregatesInput | UserBenefitScalarWhereWithAggregatesInput[]
    OR?: UserBenefitScalarWhereWithAggregatesInput[]
    NOT?: UserBenefitScalarWhereWithAggregatesInput | UserBenefitScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserBenefit"> | string
    benefitId?: IntWithAggregatesFilter<"UserBenefit"> | number
    amount?: DecimalWithAggregatesFilter<"UserBenefit"> | Decimal | DecimalJsLike | number | string
  }

  export type BenefitCreateInput = {
    code: string
    name: string
    type: $Enums.BenefitType
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userAllowance?: UserBenefitCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    type: $Enums.BenefitType
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userAllowance?: UserBenefitUncheckedCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBenefitTypeFieldUpdateOperationsInput | $Enums.BenefitType
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAllowance?: UserBenefitUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBenefitTypeFieldUpdateOperationsInput | $Enums.BenefitType
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAllowance?: UserBenefitUncheckedUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitCreateManyInput = {
    id?: number
    code: string
    name: string
    type: $Enums.BenefitType
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBenefitTypeFieldUpdateOperationsInput | $Enums.BenefitType
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBenefitTypeFieldUpdateOperationsInput | $Enums.BenefitType
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeTypeCreateInput = {
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutEmployeeTypeInput
  }

  export type EmployeeTypeUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutEmployeeTypeInput
  }

  export type EmployeeTypeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutEmployeeTypeNestedInput
  }

  export type EmployeeTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutEmployeeTypeNestedInput
  }

  export type EmployeeTypeCreateManyInput = {
    id?: number
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeTypeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionCreateInput = {
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    id?: number
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PositionUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: number
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBasicInfoCreateInput = {
    firstName: string
    middleName: string
    lastName: string
    birthdate: Date | string
    mobileNumber: string
    maritalStatus: $Enums.MaritalStatus
    gender: $Enums.Gender
    nationality: $Enums.Nationality
    provinceCode: string
    cityCode: string
    brangayCode: string
    zipCode: string
    address: string
    user: UserCreateNestedOneWithoutUserBasicInfoInput
  }

  export type UserBasicInfoUncheckedCreateInput = {
    id?: number
    userId: string
    firstName: string
    middleName: string
    lastName: string
    birthdate: Date | string
    mobileNumber: string
    maritalStatus: $Enums.MaritalStatus
    gender: $Enums.Gender
    nationality: $Enums.Nationality
    provinceCode: string
    cityCode: string
    brangayCode: string
    zipCode: string
    address: string
  }

  export type UserBasicInfoUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    brangayCode?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserBasicInfoNestedInput
  }

  export type UserBasicInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    brangayCode?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserBasicInfoCreateManyInput = {
    id?: number
    userId: string
    firstName: string
    middleName: string
    lastName: string
    birthdate: Date | string
    mobileNumber: string
    maritalStatus: $Enums.MaritalStatus
    gender: $Enums.Gender
    nationality: $Enums.Nationality
    provinceCode: string
    cityCode: string
    brangayCode: string
    zipCode: string
    address: string
  }

  export type UserBasicInfoUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    brangayCode?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserBasicInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    brangayCode?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserEmploymentBackgroundCreateInput = {
    company: string
    position: string
    dateStart: Date | string
    dateEnd: Date | string
    user: UserCreateNestedOneWithoutUserEmploymentBackgroundInput
  }

  export type UserEmploymentBackgroundUncheckedCreateInput = {
    id?: number
    userId: string
    company: string
    position: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmploymentBackgroundUpdateInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserEmploymentBackgroundNestedInput
  }

  export type UserEmploymentBackgroundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmploymentBackgroundCreateManyInput = {
    id?: number
    userId: string
    company: string
    position: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmploymentBackgroundUpdateManyMutationInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmploymentBackgroundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationalBackgroundCreateInput = {
    school: string
    level: string
    dateStart: Date | string
    dateEnd: Date | string
    user: UserCreateNestedOneWithoutUserEducationalBackgroundInput
  }

  export type UserEducationalBackgroundUncheckedCreateInput = {
    id?: number
    userId: string
    school: string
    level: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEducationalBackgroundUpdateInput = {
    school?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserEducationalBackgroundNestedInput
  }

  export type UserEducationalBackgroundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationalBackgroundCreateManyInput = {
    id?: number
    userId: string
    school: string
    level: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEducationalBackgroundUpdateManyMutationInput = {
    school?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationalBackgroundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmployementInfoCreateInput = {
    employeeId: number
    salary: Decimal | DecimalJsLike | number | string
    dateRegularization: Date | string
    dateStart: Date | string
    dateEnd: Date | string
    user: UserCreateNestedOneWithoutUserEmployementInfoInput
  }

  export type UserEmployementInfoUncheckedCreateInput = {
    id?: number
    userId: string
    employeeId: number
    salary: Decimal | DecimalJsLike | number | string
    dateRegularization: Date | string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmployementInfoUpdateInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFieldUpdateOperationsInput | Date | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserEmployementInfoNestedInput
  }

  export type UserEmployementInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFieldUpdateOperationsInput | Date | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmployementInfoCreateManyInput = {
    id?: number
    userId: string
    employeeId: number
    salary: Decimal | DecimalJsLike | number | string
    dateRegularization: Date | string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmployementInfoUpdateManyMutationInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFieldUpdateOperationsInput | Date | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmployementInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFieldUpdateOperationsInput | Date | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeCreateNestedManyWithoutUserInput
    Position?: PositionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoUncheckedCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoUncheckedCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeUncheckedCreateNestedManyWithoutUserInput
    Position?: PositionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUpdateManyWithoutUserNestedInput
    Position?: PositionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUncheckedUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUncheckedUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUncheckedUpdateManyWithoutUserNestedInput
    Position?: PositionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBenefitCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutUserBenefitInput
    benefit: BenefitCreateNestedOneWithoutUserAllowanceInput
  }

  export type UserBenefitUncheckedCreateInput = {
    userId: string
    benefitId: number
    amount: Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutUserBenefitNestedInput
    benefit?: BenefitUpdateOneRequiredWithoutUserAllowanceNestedInput
  }

  export type UserBenefitUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    benefitId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitCreateManyInput = {
    userId: string
    benefitId: number
    amount: Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    benefitId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumBenefitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BenefitType | EnumBenefitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BenefitType[] | ListEnumBenefitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BenefitType[] | ListEnumBenefitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBenefitTypeFilter<$PrismaModel> | $Enums.BenefitType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserBenefitListRelationFilter = {
    every?: UserBenefitWhereInput
    some?: UserBenefitWhereInput
    none?: UserBenefitWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserBenefitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BenefitCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumBenefitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BenefitType | EnumBenefitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BenefitType[] | ListEnumBenefitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BenefitType[] | ListEnumBenefitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBenefitTypeWithAggregatesFilter<$PrismaModel> | $Enums.BenefitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBenefitTypeFilter<$PrismaModel>
    _max?: NestedEnumBenefitTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeTypeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeTypeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumNationalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Nationality | EnumNationalityFieldRefInput<$PrismaModel>
    in?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    not?: NestedEnumNationalityFilter<$PrismaModel> | $Enums.Nationality
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserBasicInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    birthdate?: SortOrder
    mobileNumber?: SortOrder
    maritalStatus?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    brangayCode?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
  }

  export type UserBasicInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserBasicInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    birthdate?: SortOrder
    mobileNumber?: SortOrder
    maritalStatus?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    brangayCode?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
  }

  export type UserBasicInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    birthdate?: SortOrder
    mobileNumber?: SortOrder
    maritalStatus?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    brangayCode?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
  }

  export type UserBasicInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumNationalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Nationality | EnumNationalityFieldRefInput<$PrismaModel>
    in?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    not?: NestedEnumNationalityWithAggregatesFilter<$PrismaModel> | $Enums.Nationality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNationalityFilter<$PrismaModel>
    _max?: NestedEnumNationalityFilter<$PrismaModel>
  }

  export type UserEmploymentBackgroundCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEmploymentBackgroundAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserEmploymentBackgroundMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEmploymentBackgroundMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEmploymentBackgroundSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserEducationalBackgroundCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    school?: SortOrder
    level?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEducationalBackgroundAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserEducationalBackgroundMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    school?: SortOrder
    level?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEducationalBackgroundMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    school?: SortOrder
    level?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEducationalBackgroundSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserEmployementInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
    dateRegularization?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEmployementInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
  }

  export type UserEmployementInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
    dateRegularization?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEmployementInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
    dateRegularization?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
  }

  export type UserEmployementInfoSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserBasicInfoListRelationFilter = {
    every?: UserBasicInfoWhereInput
    some?: UserBasicInfoWhereInput
    none?: UserBasicInfoWhereInput
  }

  export type UserEmploymentBackgroundListRelationFilter = {
    every?: UserEmploymentBackgroundWhereInput
    some?: UserEmploymentBackgroundWhereInput
    none?: UserEmploymentBackgroundWhereInput
  }

  export type UserEducationalBackgroundListRelationFilter = {
    every?: UserEducationalBackgroundWhereInput
    some?: UserEducationalBackgroundWhereInput
    none?: UserEducationalBackgroundWhereInput
  }

  export type UserEmployementInfoListRelationFilter = {
    every?: UserEmployementInfoWhereInput
    some?: UserEmployementInfoWhereInput
    none?: UserEmployementInfoWhereInput
  }

  export type EmployeeTypeListRelationFilter = {
    every?: EmployeeTypeWhereInput
    some?: EmployeeTypeWhereInput
    none?: EmployeeTypeWhereInput
  }

  export type PositionListRelationFilter = {
    every?: PositionWhereInput
    some?: PositionWhereInput
    none?: PositionWhereInput
  }

  export type UserBasicInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEmploymentBackgroundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEducationalBackgroundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEmployementInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    keycloakId?: SortOrder
    email?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    keycloakId?: SortOrder
    email?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    keycloakId?: SortOrder
    email?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitScalarRelationFilter = {
    is?: BenefitWhereInput
    isNot?: BenefitWhereInput
  }

  export type UserBenefitUserIdBenefitIdCompoundUniqueInput = {
    userId: string
    benefitId: number
  }

  export type UserBenefitCountOrderByAggregateInput = {
    userId?: SortOrder
    benefitId?: SortOrder
    amount?: SortOrder
  }

  export type UserBenefitAvgOrderByAggregateInput = {
    benefitId?: SortOrder
    amount?: SortOrder
  }

  export type UserBenefitMaxOrderByAggregateInput = {
    userId?: SortOrder
    benefitId?: SortOrder
    amount?: SortOrder
  }

  export type UserBenefitMinOrderByAggregateInput = {
    userId?: SortOrder
    benefitId?: SortOrder
    amount?: SortOrder
  }

  export type UserBenefitSumOrderByAggregateInput = {
    benefitId?: SortOrder
    amount?: SortOrder
  }

  export type UserBenefitCreateNestedManyWithoutBenefitInput = {
    create?: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput> | UserBenefitCreateWithoutBenefitInput[] | UserBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutBenefitInput | UserBenefitCreateOrConnectWithoutBenefitInput[]
    createMany?: UserBenefitCreateManyBenefitInputEnvelope
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
  }

  export type UserBenefitUncheckedCreateNestedManyWithoutBenefitInput = {
    create?: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput> | UserBenefitCreateWithoutBenefitInput[] | UserBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutBenefitInput | UserBenefitCreateOrConnectWithoutBenefitInput[]
    createMany?: UserBenefitCreateManyBenefitInputEnvelope
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumBenefitTypeFieldUpdateOperationsInput = {
    set?: $Enums.BenefitType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserBenefitUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput> | UserBenefitCreateWithoutBenefitInput[] | UserBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutBenefitInput | UserBenefitCreateOrConnectWithoutBenefitInput[]
    upsert?: UserBenefitUpsertWithWhereUniqueWithoutBenefitInput | UserBenefitUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: UserBenefitCreateManyBenefitInputEnvelope
    set?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    disconnect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    delete?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    update?: UserBenefitUpdateWithWhereUniqueWithoutBenefitInput | UserBenefitUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: UserBenefitUpdateManyWithWhereWithoutBenefitInput | UserBenefitUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserBenefitUncheckedUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput> | UserBenefitCreateWithoutBenefitInput[] | UserBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutBenefitInput | UserBenefitCreateOrConnectWithoutBenefitInput[]
    upsert?: UserBenefitUpsertWithWhereUniqueWithoutBenefitInput | UserBenefitUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: UserBenefitCreateManyBenefitInputEnvelope
    set?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    disconnect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    delete?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    update?: UserBenefitUpdateWithWhereUniqueWithoutBenefitInput | UserBenefitUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: UserBenefitUpdateManyWithWhereWithoutBenefitInput | UserBenefitUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutEmployeeTypeInput = {
    create?: XOR<UserCreateWithoutEmployeeTypeInput, UserUncheckedCreateWithoutEmployeeTypeInput> | UserCreateWithoutEmployeeTypeInput[] | UserUncheckedCreateWithoutEmployeeTypeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeTypeInput | UserCreateOrConnectWithoutEmployeeTypeInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEmployeeTypeInput = {
    create?: XOR<UserCreateWithoutEmployeeTypeInput, UserUncheckedCreateWithoutEmployeeTypeInput> | UserCreateWithoutEmployeeTypeInput[] | UserUncheckedCreateWithoutEmployeeTypeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeTypeInput | UserCreateOrConnectWithoutEmployeeTypeInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutEmployeeTypeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeTypeInput, UserUncheckedCreateWithoutEmployeeTypeInput> | UserCreateWithoutEmployeeTypeInput[] | UserUncheckedCreateWithoutEmployeeTypeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeTypeInput | UserCreateOrConnectWithoutEmployeeTypeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEmployeeTypeInput | UserUpsertWithWhereUniqueWithoutEmployeeTypeInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEmployeeTypeInput | UserUpdateWithWhereUniqueWithoutEmployeeTypeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEmployeeTypeInput | UserUpdateManyWithWhereWithoutEmployeeTypeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEmployeeTypeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeTypeInput, UserUncheckedCreateWithoutEmployeeTypeInput> | UserCreateWithoutEmployeeTypeInput[] | UserUncheckedCreateWithoutEmployeeTypeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeTypeInput | UserCreateOrConnectWithoutEmployeeTypeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEmployeeTypeInput | UserUpsertWithWhereUniqueWithoutEmployeeTypeInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEmployeeTypeInput | UserUpdateWithWhereUniqueWithoutEmployeeTypeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEmployeeTypeInput | UserUpdateManyWithWhereWithoutEmployeeTypeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutPositionInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPositionNestedInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPositionInput | UserUpsertWithWhereUniqueWithoutPositionInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPositionInput | UserUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPositionInput | UserUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPositionInput | UserUpsertWithWhereUniqueWithoutPositionInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPositionInput | UserUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPositionInput | UserUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBasicInfoInput = {
    create?: XOR<UserCreateWithoutUserBasicInfoInput, UserUncheckedCreateWithoutUserBasicInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBasicInfoInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumNationalityFieldUpdateOperationsInput = {
    set?: $Enums.Nationality
  }

  export type UserUpdateOneRequiredWithoutUserBasicInfoNestedInput = {
    create?: XOR<UserCreateWithoutUserBasicInfoInput, UserUncheckedCreateWithoutUserBasicInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBasicInfoInput
    upsert?: UserUpsertWithoutUserBasicInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBasicInfoInput, UserUpdateWithoutUserBasicInfoInput>, UserUncheckedUpdateWithoutUserBasicInfoInput>
  }

  export type UserCreateNestedOneWithoutUserEmploymentBackgroundInput = {
    create?: XOR<UserCreateWithoutUserEmploymentBackgroundInput, UserUncheckedCreateWithoutUserEmploymentBackgroundInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEmploymentBackgroundInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserEmploymentBackgroundNestedInput = {
    create?: XOR<UserCreateWithoutUserEmploymentBackgroundInput, UserUncheckedCreateWithoutUserEmploymentBackgroundInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEmploymentBackgroundInput
    upsert?: UserUpsertWithoutUserEmploymentBackgroundInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserEmploymentBackgroundInput, UserUpdateWithoutUserEmploymentBackgroundInput>, UserUncheckedUpdateWithoutUserEmploymentBackgroundInput>
  }

  export type UserCreateNestedOneWithoutUserEducationalBackgroundInput = {
    create?: XOR<UserCreateWithoutUserEducationalBackgroundInput, UserUncheckedCreateWithoutUserEducationalBackgroundInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEducationalBackgroundInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserEducationalBackgroundNestedInput = {
    create?: XOR<UserCreateWithoutUserEducationalBackgroundInput, UserUncheckedCreateWithoutUserEducationalBackgroundInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEducationalBackgroundInput
    upsert?: UserUpsertWithoutUserEducationalBackgroundInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserEducationalBackgroundInput, UserUpdateWithoutUserEducationalBackgroundInput>, UserUncheckedUpdateWithoutUserEducationalBackgroundInput>
  }

  export type UserCreateNestedOneWithoutUserEmployementInfoInput = {
    create?: XOR<UserCreateWithoutUserEmployementInfoInput, UserUncheckedCreateWithoutUserEmployementInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEmployementInfoInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutUserEmployementInfoNestedInput = {
    create?: XOR<UserCreateWithoutUserEmployementInfoInput, UserUncheckedCreateWithoutUserEmployementInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEmployementInfoInput
    upsert?: UserUpsertWithoutUserEmployementInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserEmployementInfoInput, UserUpdateWithoutUserEmployementInfoInput>, UserUncheckedUpdateWithoutUserEmployementInfoInput>
  }

  export type UserBasicInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBasicInfoCreateWithoutUserInput, UserBasicInfoUncheckedCreateWithoutUserInput> | UserBasicInfoCreateWithoutUserInput[] | UserBasicInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBasicInfoCreateOrConnectWithoutUserInput | UserBasicInfoCreateOrConnectWithoutUserInput[]
    createMany?: UserBasicInfoCreateManyUserInputEnvelope
    connect?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
  }

  export type UserEmploymentBackgroundCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEmploymentBackgroundCreateWithoutUserInput, UserEmploymentBackgroundUncheckedCreateWithoutUserInput> | UserEmploymentBackgroundCreateWithoutUserInput[] | UserEmploymentBackgroundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEmploymentBackgroundCreateOrConnectWithoutUserInput | UserEmploymentBackgroundCreateOrConnectWithoutUserInput[]
    createMany?: UserEmploymentBackgroundCreateManyUserInputEnvelope
    connect?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
  }

  export type UserEducationalBackgroundCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEducationalBackgroundCreateWithoutUserInput, UserEducationalBackgroundUncheckedCreateWithoutUserInput> | UserEducationalBackgroundCreateWithoutUserInput[] | UserEducationalBackgroundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationalBackgroundCreateOrConnectWithoutUserInput | UserEducationalBackgroundCreateOrConnectWithoutUserInput[]
    createMany?: UserEducationalBackgroundCreateManyUserInputEnvelope
    connect?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
  }

  export type UserEmployementInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEmployementInfoCreateWithoutUserInput, UserEmployementInfoUncheckedCreateWithoutUserInput> | UserEmployementInfoCreateWithoutUserInput[] | UserEmployementInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEmployementInfoCreateOrConnectWithoutUserInput | UserEmployementInfoCreateOrConnectWithoutUserInput[]
    createMany?: UserEmployementInfoCreateManyUserInputEnvelope
    connect?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
  }

  export type UserBenefitCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput> | UserBenefitCreateWithoutUserInput[] | UserBenefitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutUserInput | UserBenefitCreateOrConnectWithoutUserInput[]
    createMany?: UserBenefitCreateManyUserInputEnvelope
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
  }

  export type EmployeeTypeCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeTypeCreateWithoutUserInput, EmployeeTypeUncheckedCreateWithoutUserInput> | EmployeeTypeCreateWithoutUserInput[] | EmployeeTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeTypeCreateOrConnectWithoutUserInput | EmployeeTypeCreateOrConnectWithoutUserInput[]
    connect?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
  }

  export type PositionCreateNestedManyWithoutUserInput = {
    create?: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput> | PositionCreateWithoutUserInput[] | PositionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput | PositionCreateOrConnectWithoutUserInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type UserBasicInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBasicInfoCreateWithoutUserInput, UserBasicInfoUncheckedCreateWithoutUserInput> | UserBasicInfoCreateWithoutUserInput[] | UserBasicInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBasicInfoCreateOrConnectWithoutUserInput | UserBasicInfoCreateOrConnectWithoutUserInput[]
    createMany?: UserBasicInfoCreateManyUserInputEnvelope
    connect?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
  }

  export type UserEmploymentBackgroundUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEmploymentBackgroundCreateWithoutUserInput, UserEmploymentBackgroundUncheckedCreateWithoutUserInput> | UserEmploymentBackgroundCreateWithoutUserInput[] | UserEmploymentBackgroundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEmploymentBackgroundCreateOrConnectWithoutUserInput | UserEmploymentBackgroundCreateOrConnectWithoutUserInput[]
    createMany?: UserEmploymentBackgroundCreateManyUserInputEnvelope
    connect?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
  }

  export type UserEducationalBackgroundUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEducationalBackgroundCreateWithoutUserInput, UserEducationalBackgroundUncheckedCreateWithoutUserInput> | UserEducationalBackgroundCreateWithoutUserInput[] | UserEducationalBackgroundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationalBackgroundCreateOrConnectWithoutUserInput | UserEducationalBackgroundCreateOrConnectWithoutUserInput[]
    createMany?: UserEducationalBackgroundCreateManyUserInputEnvelope
    connect?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
  }

  export type UserEmployementInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEmployementInfoCreateWithoutUserInput, UserEmployementInfoUncheckedCreateWithoutUserInput> | UserEmployementInfoCreateWithoutUserInput[] | UserEmployementInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEmployementInfoCreateOrConnectWithoutUserInput | UserEmployementInfoCreateOrConnectWithoutUserInput[]
    createMany?: UserEmployementInfoCreateManyUserInputEnvelope
    connect?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
  }

  export type UserBenefitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput> | UserBenefitCreateWithoutUserInput[] | UserBenefitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutUserInput | UserBenefitCreateOrConnectWithoutUserInput[]
    createMany?: UserBenefitCreateManyUserInputEnvelope
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
  }

  export type EmployeeTypeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeTypeCreateWithoutUserInput, EmployeeTypeUncheckedCreateWithoutUserInput> | EmployeeTypeCreateWithoutUserInput[] | EmployeeTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeTypeCreateOrConnectWithoutUserInput | EmployeeTypeCreateOrConnectWithoutUserInput[]
    connect?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
  }

  export type PositionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput> | PositionCreateWithoutUserInput[] | PositionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput | PositionCreateOrConnectWithoutUserInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type UserBasicInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBasicInfoCreateWithoutUserInput, UserBasicInfoUncheckedCreateWithoutUserInput> | UserBasicInfoCreateWithoutUserInput[] | UserBasicInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBasicInfoCreateOrConnectWithoutUserInput | UserBasicInfoCreateOrConnectWithoutUserInput[]
    upsert?: UserBasicInfoUpsertWithWhereUniqueWithoutUserInput | UserBasicInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBasicInfoCreateManyUserInputEnvelope
    set?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
    disconnect?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
    delete?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
    connect?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
    update?: UserBasicInfoUpdateWithWhereUniqueWithoutUserInput | UserBasicInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBasicInfoUpdateManyWithWhereWithoutUserInput | UserBasicInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBasicInfoScalarWhereInput | UserBasicInfoScalarWhereInput[]
  }

  export type UserEmploymentBackgroundUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEmploymentBackgroundCreateWithoutUserInput, UserEmploymentBackgroundUncheckedCreateWithoutUserInput> | UserEmploymentBackgroundCreateWithoutUserInput[] | UserEmploymentBackgroundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEmploymentBackgroundCreateOrConnectWithoutUserInput | UserEmploymentBackgroundCreateOrConnectWithoutUserInput[]
    upsert?: UserEmploymentBackgroundUpsertWithWhereUniqueWithoutUserInput | UserEmploymentBackgroundUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEmploymentBackgroundCreateManyUserInputEnvelope
    set?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
    disconnect?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
    delete?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
    connect?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
    update?: UserEmploymentBackgroundUpdateWithWhereUniqueWithoutUserInput | UserEmploymentBackgroundUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEmploymentBackgroundUpdateManyWithWhereWithoutUserInput | UserEmploymentBackgroundUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEmploymentBackgroundScalarWhereInput | UserEmploymentBackgroundScalarWhereInput[]
  }

  export type UserEducationalBackgroundUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEducationalBackgroundCreateWithoutUserInput, UserEducationalBackgroundUncheckedCreateWithoutUserInput> | UserEducationalBackgroundCreateWithoutUserInput[] | UserEducationalBackgroundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationalBackgroundCreateOrConnectWithoutUserInput | UserEducationalBackgroundCreateOrConnectWithoutUserInput[]
    upsert?: UserEducationalBackgroundUpsertWithWhereUniqueWithoutUserInput | UserEducationalBackgroundUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEducationalBackgroundCreateManyUserInputEnvelope
    set?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
    disconnect?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
    delete?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
    connect?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
    update?: UserEducationalBackgroundUpdateWithWhereUniqueWithoutUserInput | UserEducationalBackgroundUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEducationalBackgroundUpdateManyWithWhereWithoutUserInput | UserEducationalBackgroundUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEducationalBackgroundScalarWhereInput | UserEducationalBackgroundScalarWhereInput[]
  }

  export type UserEmployementInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEmployementInfoCreateWithoutUserInput, UserEmployementInfoUncheckedCreateWithoutUserInput> | UserEmployementInfoCreateWithoutUserInput[] | UserEmployementInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEmployementInfoCreateOrConnectWithoutUserInput | UserEmployementInfoCreateOrConnectWithoutUserInput[]
    upsert?: UserEmployementInfoUpsertWithWhereUniqueWithoutUserInput | UserEmployementInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEmployementInfoCreateManyUserInputEnvelope
    set?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
    disconnect?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
    delete?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
    connect?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
    update?: UserEmployementInfoUpdateWithWhereUniqueWithoutUserInput | UserEmployementInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEmployementInfoUpdateManyWithWhereWithoutUserInput | UserEmployementInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEmployementInfoScalarWhereInput | UserEmployementInfoScalarWhereInput[]
  }

  export type UserBenefitUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput> | UserBenefitCreateWithoutUserInput[] | UserBenefitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutUserInput | UserBenefitCreateOrConnectWithoutUserInput[]
    upsert?: UserBenefitUpsertWithWhereUniqueWithoutUserInput | UserBenefitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBenefitCreateManyUserInputEnvelope
    set?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    disconnect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    delete?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    update?: UserBenefitUpdateWithWhereUniqueWithoutUserInput | UserBenefitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBenefitUpdateManyWithWhereWithoutUserInput | UserBenefitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
  }

  export type EmployeeTypeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeTypeCreateWithoutUserInput, EmployeeTypeUncheckedCreateWithoutUserInput> | EmployeeTypeCreateWithoutUserInput[] | EmployeeTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeTypeCreateOrConnectWithoutUserInput | EmployeeTypeCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeTypeUpsertWithWhereUniqueWithoutUserInput | EmployeeTypeUpsertWithWhereUniqueWithoutUserInput[]
    set?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
    disconnect?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
    delete?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
    connect?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
    update?: EmployeeTypeUpdateWithWhereUniqueWithoutUserInput | EmployeeTypeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeTypeUpdateManyWithWhereWithoutUserInput | EmployeeTypeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeTypeScalarWhereInput | EmployeeTypeScalarWhereInput[]
  }

  export type PositionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput> | PositionCreateWithoutUserInput[] | PositionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput | PositionCreateOrConnectWithoutUserInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutUserInput | PositionUpsertWithWhereUniqueWithoutUserInput[]
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutUserInput | PositionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutUserInput | PositionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type UserBasicInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBasicInfoCreateWithoutUserInput, UserBasicInfoUncheckedCreateWithoutUserInput> | UserBasicInfoCreateWithoutUserInput[] | UserBasicInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBasicInfoCreateOrConnectWithoutUserInput | UserBasicInfoCreateOrConnectWithoutUserInput[]
    upsert?: UserBasicInfoUpsertWithWhereUniqueWithoutUserInput | UserBasicInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBasicInfoCreateManyUserInputEnvelope
    set?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
    disconnect?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
    delete?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
    connect?: UserBasicInfoWhereUniqueInput | UserBasicInfoWhereUniqueInput[]
    update?: UserBasicInfoUpdateWithWhereUniqueWithoutUserInput | UserBasicInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBasicInfoUpdateManyWithWhereWithoutUserInput | UserBasicInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBasicInfoScalarWhereInput | UserBasicInfoScalarWhereInput[]
  }

  export type UserEmploymentBackgroundUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEmploymentBackgroundCreateWithoutUserInput, UserEmploymentBackgroundUncheckedCreateWithoutUserInput> | UserEmploymentBackgroundCreateWithoutUserInput[] | UserEmploymentBackgroundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEmploymentBackgroundCreateOrConnectWithoutUserInput | UserEmploymentBackgroundCreateOrConnectWithoutUserInput[]
    upsert?: UserEmploymentBackgroundUpsertWithWhereUniqueWithoutUserInput | UserEmploymentBackgroundUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEmploymentBackgroundCreateManyUserInputEnvelope
    set?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
    disconnect?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
    delete?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
    connect?: UserEmploymentBackgroundWhereUniqueInput | UserEmploymentBackgroundWhereUniqueInput[]
    update?: UserEmploymentBackgroundUpdateWithWhereUniqueWithoutUserInput | UserEmploymentBackgroundUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEmploymentBackgroundUpdateManyWithWhereWithoutUserInput | UserEmploymentBackgroundUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEmploymentBackgroundScalarWhereInput | UserEmploymentBackgroundScalarWhereInput[]
  }

  export type UserEducationalBackgroundUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEducationalBackgroundCreateWithoutUserInput, UserEducationalBackgroundUncheckedCreateWithoutUserInput> | UserEducationalBackgroundCreateWithoutUserInput[] | UserEducationalBackgroundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationalBackgroundCreateOrConnectWithoutUserInput | UserEducationalBackgroundCreateOrConnectWithoutUserInput[]
    upsert?: UserEducationalBackgroundUpsertWithWhereUniqueWithoutUserInput | UserEducationalBackgroundUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEducationalBackgroundCreateManyUserInputEnvelope
    set?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
    disconnect?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
    delete?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
    connect?: UserEducationalBackgroundWhereUniqueInput | UserEducationalBackgroundWhereUniqueInput[]
    update?: UserEducationalBackgroundUpdateWithWhereUniqueWithoutUserInput | UserEducationalBackgroundUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEducationalBackgroundUpdateManyWithWhereWithoutUserInput | UserEducationalBackgroundUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEducationalBackgroundScalarWhereInput | UserEducationalBackgroundScalarWhereInput[]
  }

  export type UserEmployementInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEmployementInfoCreateWithoutUserInput, UserEmployementInfoUncheckedCreateWithoutUserInput> | UserEmployementInfoCreateWithoutUserInput[] | UserEmployementInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEmployementInfoCreateOrConnectWithoutUserInput | UserEmployementInfoCreateOrConnectWithoutUserInput[]
    upsert?: UserEmployementInfoUpsertWithWhereUniqueWithoutUserInput | UserEmployementInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEmployementInfoCreateManyUserInputEnvelope
    set?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
    disconnect?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
    delete?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
    connect?: UserEmployementInfoWhereUniqueInput | UserEmployementInfoWhereUniqueInput[]
    update?: UserEmployementInfoUpdateWithWhereUniqueWithoutUserInput | UserEmployementInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEmployementInfoUpdateManyWithWhereWithoutUserInput | UserEmployementInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEmployementInfoScalarWhereInput | UserEmployementInfoScalarWhereInput[]
  }

  export type UserBenefitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput> | UserBenefitCreateWithoutUserInput[] | UserBenefitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutUserInput | UserBenefitCreateOrConnectWithoutUserInput[]
    upsert?: UserBenefitUpsertWithWhereUniqueWithoutUserInput | UserBenefitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBenefitCreateManyUserInputEnvelope
    set?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    disconnect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    delete?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    update?: UserBenefitUpdateWithWhereUniqueWithoutUserInput | UserBenefitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBenefitUpdateManyWithWhereWithoutUserInput | UserBenefitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
  }

  export type EmployeeTypeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeTypeCreateWithoutUserInput, EmployeeTypeUncheckedCreateWithoutUserInput> | EmployeeTypeCreateWithoutUserInput[] | EmployeeTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeTypeCreateOrConnectWithoutUserInput | EmployeeTypeCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeTypeUpsertWithWhereUniqueWithoutUserInput | EmployeeTypeUpsertWithWhereUniqueWithoutUserInput[]
    set?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
    disconnect?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
    delete?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
    connect?: EmployeeTypeWhereUniqueInput | EmployeeTypeWhereUniqueInput[]
    update?: EmployeeTypeUpdateWithWhereUniqueWithoutUserInput | EmployeeTypeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeTypeUpdateManyWithWhereWithoutUserInput | EmployeeTypeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeTypeScalarWhereInput | EmployeeTypeScalarWhereInput[]
  }

  export type PositionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput> | PositionCreateWithoutUserInput[] | PositionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput | PositionCreateOrConnectWithoutUserInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutUserInput | PositionUpsertWithWhereUniqueWithoutUserInput[]
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutUserInput | PositionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutUserInput | PositionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBenefitInput = {
    create?: XOR<UserCreateWithoutUserBenefitInput, UserUncheckedCreateWithoutUserBenefitInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBenefitInput
    connect?: UserWhereUniqueInput
  }

  export type BenefitCreateNestedOneWithoutUserAllowanceInput = {
    create?: XOR<BenefitCreateWithoutUserAllowanceInput, BenefitUncheckedCreateWithoutUserAllowanceInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutUserAllowanceInput
    connect?: BenefitWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserBenefitNestedInput = {
    create?: XOR<UserCreateWithoutUserBenefitInput, UserUncheckedCreateWithoutUserBenefitInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBenefitInput
    upsert?: UserUpsertWithoutUserBenefitInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBenefitInput, UserUpdateWithoutUserBenefitInput>, UserUncheckedUpdateWithoutUserBenefitInput>
  }

  export type BenefitUpdateOneRequiredWithoutUserAllowanceNestedInput = {
    create?: XOR<BenefitCreateWithoutUserAllowanceInput, BenefitUncheckedCreateWithoutUserAllowanceInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutUserAllowanceInput
    upsert?: BenefitUpsertWithoutUserAllowanceInput
    connect?: BenefitWhereUniqueInput
    update?: XOR<XOR<BenefitUpdateToOneWithWhereWithoutUserAllowanceInput, BenefitUpdateWithoutUserAllowanceInput>, BenefitUncheckedUpdateWithoutUserAllowanceInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumBenefitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BenefitType | EnumBenefitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BenefitType[] | ListEnumBenefitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BenefitType[] | ListEnumBenefitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBenefitTypeFilter<$PrismaModel> | $Enums.BenefitType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumBenefitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BenefitType | EnumBenefitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BenefitType[] | ListEnumBenefitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BenefitType[] | ListEnumBenefitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBenefitTypeWithAggregatesFilter<$PrismaModel> | $Enums.BenefitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBenefitTypeFilter<$PrismaModel>
    _max?: NestedEnumBenefitTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumNationalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Nationality | EnumNationalityFieldRefInput<$PrismaModel>
    in?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    not?: NestedEnumNationalityFilter<$PrismaModel> | $Enums.Nationality
  }

  export type NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumNationalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Nationality | EnumNationalityFieldRefInput<$PrismaModel>
    in?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    not?: NestedEnumNationalityWithAggregatesFilter<$PrismaModel> | $Enums.Nationality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNationalityFilter<$PrismaModel>
    _max?: NestedEnumNationalityFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserBenefitCreateWithoutBenefitInput = {
    amount: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutUserBenefitInput
  }

  export type UserBenefitUncheckedCreateWithoutBenefitInput = {
    userId: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitCreateOrConnectWithoutBenefitInput = {
    where: UserBenefitWhereUniqueInput
    create: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput>
  }

  export type UserBenefitCreateManyBenefitInputEnvelope = {
    data: UserBenefitCreateManyBenefitInput | UserBenefitCreateManyBenefitInput[]
    skipDuplicates?: boolean
  }

  export type UserBenefitUpsertWithWhereUniqueWithoutBenefitInput = {
    where: UserBenefitWhereUniqueInput
    update: XOR<UserBenefitUpdateWithoutBenefitInput, UserBenefitUncheckedUpdateWithoutBenefitInput>
    create: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput>
  }

  export type UserBenefitUpdateWithWhereUniqueWithoutBenefitInput = {
    where: UserBenefitWhereUniqueInput
    data: XOR<UserBenefitUpdateWithoutBenefitInput, UserBenefitUncheckedUpdateWithoutBenefitInput>
  }

  export type UserBenefitUpdateManyWithWhereWithoutBenefitInput = {
    where: UserBenefitScalarWhereInput
    data: XOR<UserBenefitUpdateManyMutationInput, UserBenefitUncheckedUpdateManyWithoutBenefitInput>
  }

  export type UserBenefitScalarWhereInput = {
    AND?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
    OR?: UserBenefitScalarWhereInput[]
    NOT?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
    userId?: StringFilter<"UserBenefit"> | string
    benefitId?: IntFilter<"UserBenefit"> | number
    amount?: DecimalFilter<"UserBenefit"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateWithoutEmployeeTypeInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitCreateNestedManyWithoutUserInput
    Position?: PositionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeTypeInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoUncheckedCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoUncheckedCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
    Position?: PositionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeTypeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeTypeInput, UserUncheckedCreateWithoutEmployeeTypeInput>
  }

  export type UserUpsertWithWhereUniqueWithoutEmployeeTypeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEmployeeTypeInput, UserUncheckedUpdateWithoutEmployeeTypeInput>
    create: XOR<UserCreateWithoutEmployeeTypeInput, UserUncheckedCreateWithoutEmployeeTypeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEmployeeTypeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEmployeeTypeInput, UserUncheckedUpdateWithoutEmployeeTypeInput>
  }

  export type UserUpdateManyWithWhereWithoutEmployeeTypeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEmployeeTypeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    keycloakId?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutPositionInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPositionInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoUncheckedCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoUncheckedCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPositionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
  }

  export type UserUpdateManyWithWhereWithoutPositionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPositionInput>
  }

  export type UserCreateWithoutUserBasicInfoInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserEmploymentBackground?: UserEmploymentBackgroundCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeCreateNestedManyWithoutUserInput
    Position?: PositionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBasicInfoInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoUncheckedCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeUncheckedCreateNestedManyWithoutUserInput
    Position?: PositionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBasicInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBasicInfoInput, UserUncheckedCreateWithoutUserBasicInfoInput>
  }

  export type UserUpsertWithoutUserBasicInfoInput = {
    update: XOR<UserUpdateWithoutUserBasicInfoInput, UserUncheckedUpdateWithoutUserBasicInfoInput>
    create: XOR<UserCreateWithoutUserBasicInfoInput, UserUncheckedCreateWithoutUserBasicInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBasicInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBasicInfoInput, UserUncheckedUpdateWithoutUserBasicInfoInput>
  }

  export type UserUpdateWithoutUserBasicInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserEmploymentBackground?: UserEmploymentBackgroundUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUpdateManyWithoutUserNestedInput
    Position?: PositionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBasicInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUncheckedUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUncheckedUpdateManyWithoutUserNestedInput
    Position?: PositionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserEmploymentBackgroundInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeCreateNestedManyWithoutUserInput
    Position?: PositionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserEmploymentBackgroundInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoUncheckedCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoUncheckedCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeUncheckedCreateNestedManyWithoutUserInput
    Position?: PositionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserEmploymentBackgroundInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserEmploymentBackgroundInput, UserUncheckedCreateWithoutUserEmploymentBackgroundInput>
  }

  export type UserUpsertWithoutUserEmploymentBackgroundInput = {
    update: XOR<UserUpdateWithoutUserEmploymentBackgroundInput, UserUncheckedUpdateWithoutUserEmploymentBackgroundInput>
    create: XOR<UserCreateWithoutUserEmploymentBackgroundInput, UserUncheckedCreateWithoutUserEmploymentBackgroundInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserEmploymentBackgroundInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserEmploymentBackgroundInput, UserUncheckedUpdateWithoutUserEmploymentBackgroundInput>
  }

  export type UserUpdateWithoutUserEmploymentBackgroundInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUpdateManyWithoutUserNestedInput
    Position?: PositionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserEmploymentBackgroundInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUncheckedUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUncheckedUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUncheckedUpdateManyWithoutUserNestedInput
    Position?: PositionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserEducationalBackgroundInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeCreateNestedManyWithoutUserInput
    Position?: PositionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserEducationalBackgroundInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoUncheckedCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoUncheckedCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeUncheckedCreateNestedManyWithoutUserInput
    Position?: PositionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserEducationalBackgroundInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserEducationalBackgroundInput, UserUncheckedCreateWithoutUserEducationalBackgroundInput>
  }

  export type UserUpsertWithoutUserEducationalBackgroundInput = {
    update: XOR<UserUpdateWithoutUserEducationalBackgroundInput, UserUncheckedUpdateWithoutUserEducationalBackgroundInput>
    create: XOR<UserCreateWithoutUserEducationalBackgroundInput, UserUncheckedCreateWithoutUserEducationalBackgroundInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserEducationalBackgroundInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserEducationalBackgroundInput, UserUncheckedUpdateWithoutUserEducationalBackgroundInput>
  }

  export type UserUpdateWithoutUserEducationalBackgroundInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUpdateManyWithoutUserNestedInput
    Position?: PositionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserEducationalBackgroundInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUncheckedUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUncheckedUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUncheckedUpdateManyWithoutUserNestedInput
    Position?: PositionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserEmployementInfoInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeCreateNestedManyWithoutUserInput
    Position?: PositionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserEmployementInfoInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoUncheckedCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserBenefit?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeUncheckedCreateNestedManyWithoutUserInput
    Position?: PositionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserEmployementInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserEmployementInfoInput, UserUncheckedCreateWithoutUserEmployementInfoInput>
  }

  export type UserUpsertWithoutUserEmployementInfoInput = {
    update: XOR<UserUpdateWithoutUserEmployementInfoInput, UserUncheckedUpdateWithoutUserEmployementInfoInput>
    create: XOR<UserCreateWithoutUserEmployementInfoInput, UserUncheckedCreateWithoutUserEmployementInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserEmployementInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserEmployementInfoInput, UserUncheckedUpdateWithoutUserEmployementInfoInput>
  }

  export type UserUpdateWithoutUserEmployementInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUpdateManyWithoutUserNestedInput
    Position?: PositionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserEmployementInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUncheckedUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUncheckedUpdateManyWithoutUserNestedInput
    Position?: PositionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserBasicInfoCreateWithoutUserInput = {
    firstName: string
    middleName: string
    lastName: string
    birthdate: Date | string
    mobileNumber: string
    maritalStatus: $Enums.MaritalStatus
    gender: $Enums.Gender
    nationality: $Enums.Nationality
    provinceCode: string
    cityCode: string
    brangayCode: string
    zipCode: string
    address: string
  }

  export type UserBasicInfoUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    middleName: string
    lastName: string
    birthdate: Date | string
    mobileNumber: string
    maritalStatus: $Enums.MaritalStatus
    gender: $Enums.Gender
    nationality: $Enums.Nationality
    provinceCode: string
    cityCode: string
    brangayCode: string
    zipCode: string
    address: string
  }

  export type UserBasicInfoCreateOrConnectWithoutUserInput = {
    where: UserBasicInfoWhereUniqueInput
    create: XOR<UserBasicInfoCreateWithoutUserInput, UserBasicInfoUncheckedCreateWithoutUserInput>
  }

  export type UserBasicInfoCreateManyUserInputEnvelope = {
    data: UserBasicInfoCreateManyUserInput | UserBasicInfoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserEmploymentBackgroundCreateWithoutUserInput = {
    company: string
    position: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmploymentBackgroundUncheckedCreateWithoutUserInput = {
    id?: number
    company: string
    position: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmploymentBackgroundCreateOrConnectWithoutUserInput = {
    where: UserEmploymentBackgroundWhereUniqueInput
    create: XOR<UserEmploymentBackgroundCreateWithoutUserInput, UserEmploymentBackgroundUncheckedCreateWithoutUserInput>
  }

  export type UserEmploymentBackgroundCreateManyUserInputEnvelope = {
    data: UserEmploymentBackgroundCreateManyUserInput | UserEmploymentBackgroundCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserEducationalBackgroundCreateWithoutUserInput = {
    school: string
    level: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEducationalBackgroundUncheckedCreateWithoutUserInput = {
    id?: number
    school: string
    level: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEducationalBackgroundCreateOrConnectWithoutUserInput = {
    where: UserEducationalBackgroundWhereUniqueInput
    create: XOR<UserEducationalBackgroundCreateWithoutUserInput, UserEducationalBackgroundUncheckedCreateWithoutUserInput>
  }

  export type UserEducationalBackgroundCreateManyUserInputEnvelope = {
    data: UserEducationalBackgroundCreateManyUserInput | UserEducationalBackgroundCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserEmployementInfoCreateWithoutUserInput = {
    employeeId: number
    salary: Decimal | DecimalJsLike | number | string
    dateRegularization: Date | string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmployementInfoUncheckedCreateWithoutUserInput = {
    id?: number
    employeeId: number
    salary: Decimal | DecimalJsLike | number | string
    dateRegularization: Date | string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmployementInfoCreateOrConnectWithoutUserInput = {
    where: UserEmployementInfoWhereUniqueInput
    create: XOR<UserEmployementInfoCreateWithoutUserInput, UserEmployementInfoUncheckedCreateWithoutUserInput>
  }

  export type UserEmployementInfoCreateManyUserInputEnvelope = {
    data: UserEmployementInfoCreateManyUserInput | UserEmployementInfoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBenefitCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    benefit: BenefitCreateNestedOneWithoutUserAllowanceInput
  }

  export type UserBenefitUncheckedCreateWithoutUserInput = {
    benefitId: number
    amount: Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitCreateOrConnectWithoutUserInput = {
    where: UserBenefitWhereUniqueInput
    create: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput>
  }

  export type UserBenefitCreateManyUserInputEnvelope = {
    data: UserBenefitCreateManyUserInput | UserBenefitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeTypeCreateWithoutUserInput = {
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeTypeUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeTypeCreateOrConnectWithoutUserInput = {
    where: EmployeeTypeWhereUniqueInput
    create: XOR<EmployeeTypeCreateWithoutUserInput, EmployeeTypeUncheckedCreateWithoutUserInput>
  }

  export type PositionCreateWithoutUserInput = {
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PositionUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    name: string
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PositionCreateOrConnectWithoutUserInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput>
  }

  export type UserBasicInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBasicInfoWhereUniqueInput
    update: XOR<UserBasicInfoUpdateWithoutUserInput, UserBasicInfoUncheckedUpdateWithoutUserInput>
    create: XOR<UserBasicInfoCreateWithoutUserInput, UserBasicInfoUncheckedCreateWithoutUserInput>
  }

  export type UserBasicInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBasicInfoWhereUniqueInput
    data: XOR<UserBasicInfoUpdateWithoutUserInput, UserBasicInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserBasicInfoUpdateManyWithWhereWithoutUserInput = {
    where: UserBasicInfoScalarWhereInput
    data: XOR<UserBasicInfoUpdateManyMutationInput, UserBasicInfoUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBasicInfoScalarWhereInput = {
    AND?: UserBasicInfoScalarWhereInput | UserBasicInfoScalarWhereInput[]
    OR?: UserBasicInfoScalarWhereInput[]
    NOT?: UserBasicInfoScalarWhereInput | UserBasicInfoScalarWhereInput[]
    id?: IntFilter<"UserBasicInfo"> | number
    userId?: StringFilter<"UserBasicInfo"> | string
    firstName?: StringFilter<"UserBasicInfo"> | string
    middleName?: StringFilter<"UserBasicInfo"> | string
    lastName?: StringFilter<"UserBasicInfo"> | string
    birthdate?: DateTimeFilter<"UserBasicInfo"> | Date | string
    mobileNumber?: StringFilter<"UserBasicInfo"> | string
    maritalStatus?: EnumMaritalStatusFilter<"UserBasicInfo"> | $Enums.MaritalStatus
    gender?: EnumGenderFilter<"UserBasicInfo"> | $Enums.Gender
    nationality?: EnumNationalityFilter<"UserBasicInfo"> | $Enums.Nationality
    provinceCode?: StringFilter<"UserBasicInfo"> | string
    cityCode?: StringFilter<"UserBasicInfo"> | string
    brangayCode?: StringFilter<"UserBasicInfo"> | string
    zipCode?: StringFilter<"UserBasicInfo"> | string
    address?: StringFilter<"UserBasicInfo"> | string
  }

  export type UserEmploymentBackgroundUpsertWithWhereUniqueWithoutUserInput = {
    where: UserEmploymentBackgroundWhereUniqueInput
    update: XOR<UserEmploymentBackgroundUpdateWithoutUserInput, UserEmploymentBackgroundUncheckedUpdateWithoutUserInput>
    create: XOR<UserEmploymentBackgroundCreateWithoutUserInput, UserEmploymentBackgroundUncheckedCreateWithoutUserInput>
  }

  export type UserEmploymentBackgroundUpdateWithWhereUniqueWithoutUserInput = {
    where: UserEmploymentBackgroundWhereUniqueInput
    data: XOR<UserEmploymentBackgroundUpdateWithoutUserInput, UserEmploymentBackgroundUncheckedUpdateWithoutUserInput>
  }

  export type UserEmploymentBackgroundUpdateManyWithWhereWithoutUserInput = {
    where: UserEmploymentBackgroundScalarWhereInput
    data: XOR<UserEmploymentBackgroundUpdateManyMutationInput, UserEmploymentBackgroundUncheckedUpdateManyWithoutUserInput>
  }

  export type UserEmploymentBackgroundScalarWhereInput = {
    AND?: UserEmploymentBackgroundScalarWhereInput | UserEmploymentBackgroundScalarWhereInput[]
    OR?: UserEmploymentBackgroundScalarWhereInput[]
    NOT?: UserEmploymentBackgroundScalarWhereInput | UserEmploymentBackgroundScalarWhereInput[]
    id?: IntFilter<"UserEmploymentBackground"> | number
    userId?: StringFilter<"UserEmploymentBackground"> | string
    company?: StringFilter<"UserEmploymentBackground"> | string
    position?: StringFilter<"UserEmploymentBackground"> | string
    dateStart?: DateTimeFilter<"UserEmploymentBackground"> | Date | string
    dateEnd?: DateTimeFilter<"UserEmploymentBackground"> | Date | string
  }

  export type UserEducationalBackgroundUpsertWithWhereUniqueWithoutUserInput = {
    where: UserEducationalBackgroundWhereUniqueInput
    update: XOR<UserEducationalBackgroundUpdateWithoutUserInput, UserEducationalBackgroundUncheckedUpdateWithoutUserInput>
    create: XOR<UserEducationalBackgroundCreateWithoutUserInput, UserEducationalBackgroundUncheckedCreateWithoutUserInput>
  }

  export type UserEducationalBackgroundUpdateWithWhereUniqueWithoutUserInput = {
    where: UserEducationalBackgroundWhereUniqueInput
    data: XOR<UserEducationalBackgroundUpdateWithoutUserInput, UserEducationalBackgroundUncheckedUpdateWithoutUserInput>
  }

  export type UserEducationalBackgroundUpdateManyWithWhereWithoutUserInput = {
    where: UserEducationalBackgroundScalarWhereInput
    data: XOR<UserEducationalBackgroundUpdateManyMutationInput, UserEducationalBackgroundUncheckedUpdateManyWithoutUserInput>
  }

  export type UserEducationalBackgroundScalarWhereInput = {
    AND?: UserEducationalBackgroundScalarWhereInput | UserEducationalBackgroundScalarWhereInput[]
    OR?: UserEducationalBackgroundScalarWhereInput[]
    NOT?: UserEducationalBackgroundScalarWhereInput | UserEducationalBackgroundScalarWhereInput[]
    id?: IntFilter<"UserEducationalBackground"> | number
    userId?: StringFilter<"UserEducationalBackground"> | string
    school?: StringFilter<"UserEducationalBackground"> | string
    level?: StringFilter<"UserEducationalBackground"> | string
    dateStart?: DateTimeFilter<"UserEducationalBackground"> | Date | string
    dateEnd?: DateTimeFilter<"UserEducationalBackground"> | Date | string
  }

  export type UserEmployementInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: UserEmployementInfoWhereUniqueInput
    update: XOR<UserEmployementInfoUpdateWithoutUserInput, UserEmployementInfoUncheckedUpdateWithoutUserInput>
    create: XOR<UserEmployementInfoCreateWithoutUserInput, UserEmployementInfoUncheckedCreateWithoutUserInput>
  }

  export type UserEmployementInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: UserEmployementInfoWhereUniqueInput
    data: XOR<UserEmployementInfoUpdateWithoutUserInput, UserEmployementInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserEmployementInfoUpdateManyWithWhereWithoutUserInput = {
    where: UserEmployementInfoScalarWhereInput
    data: XOR<UserEmployementInfoUpdateManyMutationInput, UserEmployementInfoUncheckedUpdateManyWithoutUserInput>
  }

  export type UserEmployementInfoScalarWhereInput = {
    AND?: UserEmployementInfoScalarWhereInput | UserEmployementInfoScalarWhereInput[]
    OR?: UserEmployementInfoScalarWhereInput[]
    NOT?: UserEmployementInfoScalarWhereInput | UserEmployementInfoScalarWhereInput[]
    id?: IntFilter<"UserEmployementInfo"> | number
    userId?: StringFilter<"UserEmployementInfo"> | string
    employeeId?: IntFilter<"UserEmployementInfo"> | number
    salary?: DecimalFilter<"UserEmployementInfo"> | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFilter<"UserEmployementInfo"> | Date | string
    dateStart?: DateTimeFilter<"UserEmployementInfo"> | Date | string
    dateEnd?: DateTimeFilter<"UserEmployementInfo"> | Date | string
  }

  export type UserBenefitUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBenefitWhereUniqueInput
    update: XOR<UserBenefitUpdateWithoutUserInput, UserBenefitUncheckedUpdateWithoutUserInput>
    create: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput>
  }

  export type UserBenefitUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBenefitWhereUniqueInput
    data: XOR<UserBenefitUpdateWithoutUserInput, UserBenefitUncheckedUpdateWithoutUserInput>
  }

  export type UserBenefitUpdateManyWithWhereWithoutUserInput = {
    where: UserBenefitScalarWhereInput
    data: XOR<UserBenefitUpdateManyMutationInput, UserBenefitUncheckedUpdateManyWithoutUserInput>
  }

  export type EmployeeTypeUpsertWithWhereUniqueWithoutUserInput = {
    where: EmployeeTypeWhereUniqueInput
    update: XOR<EmployeeTypeUpdateWithoutUserInput, EmployeeTypeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeTypeCreateWithoutUserInput, EmployeeTypeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeTypeUpdateWithWhereUniqueWithoutUserInput = {
    where: EmployeeTypeWhereUniqueInput
    data: XOR<EmployeeTypeUpdateWithoutUserInput, EmployeeTypeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeTypeUpdateManyWithWhereWithoutUserInput = {
    where: EmployeeTypeScalarWhereInput
    data: XOR<EmployeeTypeUpdateManyMutationInput, EmployeeTypeUncheckedUpdateManyWithoutUserInput>
  }

  export type EmployeeTypeScalarWhereInput = {
    AND?: EmployeeTypeScalarWhereInput | EmployeeTypeScalarWhereInput[]
    OR?: EmployeeTypeScalarWhereInput[]
    NOT?: EmployeeTypeScalarWhereInput | EmployeeTypeScalarWhereInput[]
    id?: IntFilter<"EmployeeType"> | number
    code?: StringFilter<"EmployeeType"> | string
    name?: StringFilter<"EmployeeType"> | string
    active?: BoolFilter<"EmployeeType"> | boolean
    description?: StringNullableFilter<"EmployeeType"> | string | null
    createdAt?: DateTimeFilter<"EmployeeType"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeType"> | Date | string
  }

  export type PositionUpsertWithWhereUniqueWithoutUserInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutUserInput, PositionUncheckedUpdateWithoutUserInput>
    create: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutUserInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutUserInput, PositionUncheckedUpdateWithoutUserInput>
  }

  export type PositionUpdateManyWithWhereWithoutUserInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutUserInput>
  }

  export type PositionScalarWhereInput = {
    AND?: PositionScalarWhereInput | PositionScalarWhereInput[]
    OR?: PositionScalarWhereInput[]
    NOT?: PositionScalarWhereInput | PositionScalarWhereInput[]
    id?: IntFilter<"Position"> | number
    code?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    active?: BoolFilter<"Position"> | boolean
    description?: StringNullableFilter<"Position"> | string | null
    createdAt?: DateTimeFilter<"Position"> | Date | string
    updatedAt?: DateTimeFilter<"Position"> | Date | string
  }

  export type UserCreateWithoutUserBenefitInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeCreateNestedManyWithoutUserInput
    Position?: PositionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBenefitInput = {
    id?: string
    keycloakId: string
    email?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserBasicInfo?: UserBasicInfoUncheckedCreateNestedManyWithoutUserInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedCreateNestedManyWithoutUserInput
    UserEmployementInfo?: UserEmployementInfoUncheckedCreateNestedManyWithoutUserInput
    EmployeeType?: EmployeeTypeUncheckedCreateNestedManyWithoutUserInput
    Position?: PositionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBenefitInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBenefitInput, UserUncheckedCreateWithoutUserBenefitInput>
  }

  export type BenefitCreateWithoutUserAllowanceInput = {
    code: string
    name: string
    type: $Enums.BenefitType
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUncheckedCreateWithoutUserAllowanceInput = {
    id?: number
    code: string
    name: string
    type: $Enums.BenefitType
    active?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitCreateOrConnectWithoutUserAllowanceInput = {
    where: BenefitWhereUniqueInput
    create: XOR<BenefitCreateWithoutUserAllowanceInput, BenefitUncheckedCreateWithoutUserAllowanceInput>
  }

  export type UserUpsertWithoutUserBenefitInput = {
    update: XOR<UserUpdateWithoutUserBenefitInput, UserUncheckedUpdateWithoutUserBenefitInput>
    create: XOR<UserCreateWithoutUserBenefitInput, UserUncheckedCreateWithoutUserBenefitInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBenefitInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBenefitInput, UserUncheckedUpdateWithoutUserBenefitInput>
  }

  export type UserUpdateWithoutUserBenefitInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUpdateManyWithoutUserNestedInput
    Position?: PositionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBenefitInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUncheckedUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUncheckedUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUncheckedUpdateManyWithoutUserNestedInput
    Position?: PositionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BenefitUpsertWithoutUserAllowanceInput = {
    update: XOR<BenefitUpdateWithoutUserAllowanceInput, BenefitUncheckedUpdateWithoutUserAllowanceInput>
    create: XOR<BenefitCreateWithoutUserAllowanceInput, BenefitUncheckedCreateWithoutUserAllowanceInput>
    where?: BenefitWhereInput
  }

  export type BenefitUpdateToOneWithWhereWithoutUserAllowanceInput = {
    where?: BenefitWhereInput
    data: XOR<BenefitUpdateWithoutUserAllowanceInput, BenefitUncheckedUpdateWithoutUserAllowanceInput>
  }

  export type BenefitUpdateWithoutUserAllowanceInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBenefitTypeFieldUpdateOperationsInput | $Enums.BenefitType
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateWithoutUserAllowanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBenefitTypeFieldUpdateOperationsInput | $Enums.BenefitType
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBenefitCreateManyBenefitInput = {
    userId: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitUpdateWithoutBenefitInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutUserBenefitNestedInput
  }

  export type UserBenefitUncheckedUpdateWithoutBenefitInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitUncheckedUpdateManyWithoutBenefitInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateWithoutEmployeeTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUpdateManyWithoutUserNestedInput
    Position?: PositionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUncheckedUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUncheckedUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
    Position?: PositionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEmployeeTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserBasicInfo?: UserBasicInfoUncheckedUpdateManyWithoutUserNestedInput
    UserEmploymentBackground?: UserEmploymentBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEducationalBackground?: UserEducationalBackgroundUncheckedUpdateManyWithoutUserNestedInput
    UserEmployementInfo?: UserEmployementInfoUncheckedUpdateManyWithoutUserNestedInput
    UserBenefit?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
    EmployeeType?: EmployeeTypeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    keycloakId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBasicInfoCreateManyUserInput = {
    id?: number
    firstName: string
    middleName: string
    lastName: string
    birthdate: Date | string
    mobileNumber: string
    maritalStatus: $Enums.MaritalStatus
    gender: $Enums.Gender
    nationality: $Enums.Nationality
    provinceCode: string
    cityCode: string
    brangayCode: string
    zipCode: string
    address: string
  }

  export type UserEmploymentBackgroundCreateManyUserInput = {
    id?: number
    company: string
    position: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEducationalBackgroundCreateManyUserInput = {
    id?: number
    school: string
    level: string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserEmployementInfoCreateManyUserInput = {
    id?: number
    employeeId: number
    salary: Decimal | DecimalJsLike | number | string
    dateRegularization: Date | string
    dateStart: Date | string
    dateEnd: Date | string
  }

  export type UserBenefitCreateManyUserInput = {
    benefitId: number
    amount: Decimal | DecimalJsLike | number | string
  }

  export type UserBasicInfoUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    brangayCode?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserBasicInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    brangayCode?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserBasicInfoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    brangayCode?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserEmploymentBackgroundUpdateWithoutUserInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmploymentBackgroundUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmploymentBackgroundUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationalBackgroundUpdateWithoutUserInput = {
    school?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationalBackgroundUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationalBackgroundUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmployementInfoUpdateWithoutUserInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFieldUpdateOperationsInput | Date | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmployementInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFieldUpdateOperationsInput | Date | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEmployementInfoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateRegularization?: DateTimeFieldUpdateOperationsInput | Date | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBenefitUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    benefit?: BenefitUpdateOneRequiredWithoutUserAllowanceNestedInput
  }

  export type UserBenefitUncheckedUpdateWithoutUserInput = {
    benefitId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserBenefitUncheckedUpdateManyWithoutUserInput = {
    benefitId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmployeeTypeUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeTypeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeTypeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}