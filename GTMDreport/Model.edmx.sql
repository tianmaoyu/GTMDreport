
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 07/18/2016 14:51:15
-- Generated from EDMX file: G:\贵统民调\GTMDreport\GTMDreport\GTMDreport\Model.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [GTMDReport];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_IndustrycCassification_Classification]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[IndustrycCassification] DROP CONSTRAINT [FK_IndustrycCassification_Classification];
GO
IF OBJECT_ID(N'[dbo].[FK_IndustrycCassification_Region]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[IndustrycCassification] DROP CONSTRAINT [FK_IndustrycCassification_Region];
GO
IF OBJECT_ID(N'[dbo].[FK_NonPublicIndustry_IndexIndustry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NonPublicIndustry] DROP CONSTRAINT [FK_NonPublicIndustry_IndexIndustry];
GO
IF OBJECT_ID(N'[dbo].[FK_NonPublicIndustry_Region]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NonPublicIndustry] DROP CONSTRAINT [FK_NonPublicIndustry_Region];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Classification]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Classification];
GO
IF OBJECT_ID(N'[dbo].[IndexIndustry]', 'U') IS NOT NULL
    DROP TABLE [dbo].[IndexIndustry];
GO
IF OBJECT_ID(N'[dbo].[IndustrycCassification]', 'U') IS NOT NULL
    DROP TABLE [dbo].[IndustrycCassification];
GO
IF OBJECT_ID(N'[dbo].[NonPublicIndustry]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NonPublicIndustry];
GO
IF OBJECT_ID(N'[dbo].[Region]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Region];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Classifications'
CREATE TABLE [dbo].[Classifications] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NULL
);
GO

-- Creating table 'IndexIndustries'
CREATE TABLE [dbo].[IndexIndustries] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NULL
);
GO

-- Creating table 'NonPublicIndustries'
CREATE TABLE [dbo].[NonPublicIndustries] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [IndexIndustryID] int  NULL,
    [PrivateEconomy] float  NULL,
    [CapitalEconomy] float  NULL,
    [GrowthRate] float  NULL,
    [Date] datetime  NULL,
    [RegionID] int  NULL,
    [IndexName] varchar(max)  NULL,
    [RegionName] varchar(max)  NULL
);
GO

-- Creating table 'Regions'
CREATE TABLE [dbo].[Regions] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NOT NULL
);
GO

-- Creating table 'IndustrycCassifications'
CREATE TABLE [dbo].[IndustrycCassifications] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [IndustryOutput] float  NULL,
    [IndustrySalesOutput] float  NULL,
    [IndustryGrowthOutput] float  NULL,
    [IGO_GrowthRate] float  NULL,
    [AssetsTotal] float  NULL,
    [AT_GrowthRate] float  NULL,
    [DebtTotal] float  NULL,
    [DTG_GrowthRate] float  NULL,
    [Income] float  NULL,
    [Inc_GrowthRate] float  NULL,
    [ProfitsTotal] float  NULL,
    [Pro_GrowthRate] float  NULL,
    [VAT] float  NULL,
    [VAT_GrowthRate] float  NULL,
    [ExpenceInterest] float  NULL,
    [EI_GrowthRate] float  NULL,
    [Stock] float  NULL,
    [St_GrowthRate] float  NULL,
    [Date] datetime  NULL,
    [RegionID] int  NULL,
    [ClassificationID] int  NULL,
    [RegionName] varchar(max)  NULL,
    [ClassificationName] varchar(max)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [ID] in table 'Classifications'
ALTER TABLE [dbo].[Classifications]
ADD CONSTRAINT [PK_Classifications]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [ID] in table 'IndexIndustries'
ALTER TABLE [dbo].[IndexIndustries]
ADD CONSTRAINT [PK_IndexIndustries]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [ID] in table 'NonPublicIndustries'
ALTER TABLE [dbo].[NonPublicIndustries]
ADD CONSTRAINT [PK_NonPublicIndustries]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [ID] in table 'Regions'
ALTER TABLE [dbo].[Regions]
ADD CONSTRAINT [PK_Regions]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [ID] in table 'IndustrycCassifications'
ALTER TABLE [dbo].[IndustrycCassifications]
ADD CONSTRAINT [PK_IndustrycCassifications]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [IndexIndustryID] in table 'NonPublicIndustries'
ALTER TABLE [dbo].[NonPublicIndustries]
ADD CONSTRAINT [FK_NonPublicIndustry_IndexIndustry]
    FOREIGN KEY ([IndexIndustryID])
    REFERENCES [dbo].[IndexIndustries]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NonPublicIndustry_IndexIndustry'
CREATE INDEX [IX_FK_NonPublicIndustry_IndexIndustry]
ON [dbo].[NonPublicIndustries]
    ([IndexIndustryID]);
GO

-- Creating foreign key on [RegionID] in table 'NonPublicIndustries'
ALTER TABLE [dbo].[NonPublicIndustries]
ADD CONSTRAINT [FK_NonPublicIndustry_Region]
    FOREIGN KEY ([RegionID])
    REFERENCES [dbo].[Regions]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NonPublicIndustry_Region'
CREATE INDEX [IX_FK_NonPublicIndustry_Region]
ON [dbo].[NonPublicIndustries]
    ([RegionID]);
GO

-- Creating foreign key on [ClassificationID] in table 'IndustrycCassifications'
ALTER TABLE [dbo].[IndustrycCassifications]
ADD CONSTRAINT [FK_IndustrycCassification_Classification]
    FOREIGN KEY ([ClassificationID])
    REFERENCES [dbo].[Classifications]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_IndustrycCassification_Classification'
CREATE INDEX [IX_FK_IndustrycCassification_Classification]
ON [dbo].[IndustrycCassifications]
    ([ClassificationID]);
GO

-- Creating foreign key on [RegionID] in table 'IndustrycCassifications'
ALTER TABLE [dbo].[IndustrycCassifications]
ADD CONSTRAINT [FK_IndustrycCassification_Region]
    FOREIGN KEY ([RegionID])
    REFERENCES [dbo].[Regions]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_IndustrycCassification_Region'
CREATE INDEX [IX_FK_IndustrycCassification_Region]
ON [dbo].[IndustrycCassifications]
    ([RegionID]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------