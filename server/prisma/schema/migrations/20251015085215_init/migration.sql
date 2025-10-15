-- CreateEnum
CREATE TYPE "BenefitType" AS ENUM ('DEBIT', 'CREDIT');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'WIDOWED', 'DIVORCED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Nationality" AS ENUM ('AFGHAN', 'ALBANIAN', 'ALGERIAN', 'AMERICAN', 'ANDORRAN', 'ANGOLAN', 'ANTIGUAN', 'ARGENTINE', 'ARMENIAN', 'AUSTRALIAN', 'AUSTRIAN', 'AZERBAIJANI', 'BAHAMIAN', 'BAHRAINI', 'BANGLADESHI', 'BARBADIAN', 'BELARUSIAN', 'BELGIAN', 'BELIZEAN', 'BENINESE', 'BHUTANESE', 'BOLIVIAN', 'BOSNIAN', 'BOTSWANAN', 'BRAZILIAN', 'BRITISH', 'BRUNEIAN', 'BULGARIAN', 'BURKINABE', 'BURMESE', 'BURUNDIAN', 'CAMBODIAN', 'CAMEROONIAN', 'CANADIAN', 'CAPE_VERDEAN', 'CENTRAL_AFRICAN', 'CHADIAN', 'CHILEAN', 'CHINESE', 'COLOMBIAN', 'COMORAN', 'CONGOLESE', 'COSTA_RICAN', 'CROATIAN', 'CUBAN', 'CYPRIOT', 'CZECH', 'DANISH', 'DJIBOUTIAN', 'DOMINICAN', 'DUTCH', 'EAST_TIMORESE', 'ECUADORIAN', 'EGYPTIAN', 'EMIRATI', 'ENGLISH', 'EQUATOGUINEAN', 'ERITREAN', 'ESTONIAN', 'ETHIOPIAN', 'FIJIAN', 'FILIPINO', 'FINNISH', 'FRENCH', 'GABONESE', 'GAMBIAN', 'GEORGIAN', 'GERMAN', 'GHANAIAN', 'GREEK', 'GRENADIAN', 'GUATEMALAN', 'GUINEAN', 'GUINEA_BISSAUAN', 'GUYANESE', 'HAITIAN', 'HERZEGOVINIAN', 'HONDURAN', 'HUNGARIAN', 'ICELANDIC', 'INDIAN', 'INDONESIAN', 'IRANIAN', 'IRAQI', 'IRISH', 'ISRAELI', 'ITALIAN', 'IVORIAN', 'JAMAICAN', 'JAPANESE', 'JORDANIAN', 'KAZAKHSTANI', 'KENYAN', 'KIRIBATI', 'KOREAN', 'KOSOVAR', 'KUWAITI', 'KYRGYZ', 'LAOTIAN', 'LATVIAN', 'LEBANESE', 'LIBERIAN', 'LIBYAN', 'LIECHTENSTEINER', 'LITHUANIAN', 'LUXEMBOURGER', 'MACEDONIAN', 'MALAGASY', 'MALAWIAN', 'MALAYSIAN', 'MALDIVIAN', 'MALIEN', 'MALTESE', 'MARSHALLESE', 'MAURITANIAN', 'MAURITIAN', 'MEXICAN', 'MICRONESIAN', 'MOLDOVAN', 'MONACAN', 'MONGOLIAN', 'MONTENEGRIN', 'MOROCCAN', 'MOSOTHO', 'MOZAMBICAN', 'NAMIBIAN', 'NAURUAN', 'NEPALESE', 'NEW_ZEALANDER', 'NICARAGUAN', 'NIGERIEN', 'NIGERIAN', 'NORWEGIAN', 'OMANI', 'PAKISTANI', 'PALAUAN', 'PALESTINIAN', 'PANAMANIAN', 'PAPUA_NEW_GUINEAN', 'PARAGUAYAN', 'PERUVIAN', 'POLISH', 'PORTUGUESE', 'QATARI', 'ROMANIAN', 'RUSSIAN', 'RWANDAN', 'SAINT_LUCIAN', 'SALVADORAN', 'SAMOAN', 'SAN_MARINESE', 'SAO_TOMEAN', 'SAUDI', 'SCOTTISH', 'SENEGALESE', 'SERBIAN', 'SEYCHELLOIS', 'SIERRA_LEONEAN', 'SINGAPOREAN', 'SLOVAK', 'SLOVENIAN', 'SOLOMON_ISLANDER', 'SOMALI', 'SOUTH_AFRICAN', 'SPANISH', 'SRI_LANKAN', 'SUDANESE', 'SURINAMESE', 'SWAZI', 'SWEDISH', 'SWISS', 'SYRIAN', 'TAIWANESE', 'TAJIK', 'TANZANIAN', 'THAI', 'TOGOLESE', 'TONGAN', 'TRINIDADIAN', 'TUNISIAN', 'TURKISH', 'TURKMEN', 'TUVALUAN', 'UGANDAN', 'UKRAINIAN', 'URUGUAYAN', 'UZBEK', 'VATICAN', 'VENEZUELAN', 'VIETNAMESE', 'WELSH', 'YEMENI', 'ZAMBIAN', 'ZIMBABWEAN');

-- CreateTable
CREATE TABLE "benefit" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(30) NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "type" "BenefitType" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "description" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_type" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(15) NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "description" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "description" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(30) NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "description" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_basic_info" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "first_name" VARCHAR(60) NOT NULL,
    "middle_name" VARCHAR(60) NOT NULL,
    "last_name" VARCHAR(60) NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "mobile_number" VARCHAR(11) NOT NULL,
    "marital_status" "MaritalStatus" NOT NULL,
    "gender" "Gender" NOT NULL,
    "nationality" "Nationality" NOT NULL,
    "province_code" VARCHAR(5) NOT NULL,
    "city_code" VARCHAR(7) NOT NULL,
    "brangay_code" VARCHAR(10) NOT NULL,
    "zip_code" VARCHAR(4) NOT NULL,
    "address" VARCHAR(120) NOT NULL,

    CONSTRAINT "user_basic_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_employment_background" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "company" VARCHAR(120) NOT NULL,
    "position" VARCHAR(120) NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_employment_background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_educational_background" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "level" VARCHAR(120) NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_educational_background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_employment_info" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "date_regularization" TIMESTAMP(3) NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_employment_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "keycloakId" TEXT NOT NULL,
    "email" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_benefit" (
    "user_id" TEXT NOT NULL,
    "benefit_id" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "user_benefit_pkey" PRIMARY KEY ("user_id","benefit_id")
);

-- CreateTable
CREATE TABLE "_EmployeeTypeToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EmployeeTypeToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PositionToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PositionToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "benefit_code_key" ON "benefit"("code");

-- CreateIndex
CREATE UNIQUE INDEX "benefit_name_key" ON "benefit"("name");

-- CreateIndex
CREATE INDEX "benefit_code_idx" ON "benefit"("code");

-- CreateIndex
CREATE INDEX "benefit_is_active_idx" ON "benefit"("is_active");

-- CreateIndex
CREATE INDEX "benefit_name_idx" ON "benefit"("name");

-- CreateIndex
CREATE INDEX "benefit_code_is_active_idx" ON "benefit"("code", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "employee_type_code_key" ON "employee_type"("code");

-- CreateIndex
CREATE UNIQUE INDEX "employee_type_name_key" ON "employee_type"("name");

-- CreateIndex
CREATE INDEX "employee_type_code_idx" ON "employee_type"("code");

-- CreateIndex
CREATE INDEX "employee_type_is_active_idx" ON "employee_type"("is_active");

-- CreateIndex
CREATE INDEX "employee_type_name_idx" ON "employee_type"("name");

-- CreateIndex
CREATE INDEX "employee_type_code_is_active_idx" ON "employee_type"("code", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "position_code_key" ON "position"("code");

-- CreateIndex
CREATE UNIQUE INDEX "position_name_key" ON "position"("name");

-- CreateIndex
CREATE INDEX "position_code_idx" ON "position"("code");

-- CreateIndex
CREATE INDEX "position_is_active_idx" ON "position"("is_active");

-- CreateIndex
CREATE INDEX "position_name_idx" ON "position"("name");

-- CreateIndex
CREATE INDEX "position_code_is_active_idx" ON "position"("code", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "task_code_key" ON "task"("code");

-- CreateIndex
CREATE UNIQUE INDEX "task_name_key" ON "task"("name");

-- CreateIndex
CREATE INDEX "task_code_idx" ON "task"("code");

-- CreateIndex
CREATE INDEX "task_is_active_idx" ON "task"("is_active");

-- CreateIndex
CREATE INDEX "task_name_idx" ON "task"("name");

-- CreateIndex
CREATE INDEX "task_code_is_active_idx" ON "task"("code", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "user_basic_info_mobile_number_key" ON "user_basic_info"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "user_employment_info_employee_id_key" ON "user_employment_info"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_keycloakId_key" ON "user"("keycloakId");

-- CreateIndex
CREATE INDEX "_EmployeeTypeToUser_B_index" ON "_EmployeeTypeToUser"("B");

-- CreateIndex
CREATE INDEX "_PositionToUser_B_index" ON "_PositionToUser"("B");

-- AddForeignKey
ALTER TABLE "user_basic_info" ADD CONSTRAINT "user_basic_info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_employment_background" ADD CONSTRAINT "user_employment_background_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_educational_background" ADD CONSTRAINT "user_educational_background_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_employment_info" ADD CONSTRAINT "user_employment_info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_benefit" ADD CONSTRAINT "user_benefit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_benefit" ADD CONSTRAINT "user_benefit_benefit_id_fkey" FOREIGN KEY ("benefit_id") REFERENCES "benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeTypeToUser" ADD CONSTRAINT "_EmployeeTypeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "employee_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeTypeToUser" ADD CONSTRAINT "_EmployeeTypeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PositionToUser" ADD CONSTRAINT "_PositionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "position"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PositionToUser" ADD CONSTRAINT "_PositionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
