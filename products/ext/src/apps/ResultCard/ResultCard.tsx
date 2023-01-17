import React from 'react';
import { styled } from '@abyss/web/tools/styled';
import { Grid } from '@abyss/web/ui/Grid';
import { Box } from '@abyss/web/ui/Box';
import { Heading } from '@abyss/web/ui/Heading';
import { Layout } from '@abyss/web/ui/Layout';
import { Badge } from '@abyss/web/ui/Badge';
import { IconMaterial } from '@abyss/web/ui/IconMaterial';
import { Card } from '@abyss/web/ui/Card';
import { Link } from '@abyss/web/ui/Link';
import { Button } from '@abyss/web/ui/Button';

const ResultCardContainer = styled(Card, {
  minHeight: '296px',
  border: '1px solid #CBCCCD',
  borderRadius: '8px',
  background: '$white',
});

const ProviderInfo = styled(Layout.Stack, {
  display: 'flex',
  justifyContent: 'left',
  marginTop: '35px',
});

const AddressInfo = styled(Layout.Stack, {
  marginTop: '50px',
});

const Selection = styled('div', {
  marginTop: '50px',
});

const ProviderSpecialty = styled('div', {});

const ProviderNetwork = styled('div', {
  color: 'green',
  fontWeight: '$bold',
  marginTop: '16px',
  marginBottom: '16px',
});

const ProviderGender = styled('div', {});

const ProviderLanguage = styled('div', {});

const ProviderLocation = styled('div', {});

const ProviderAddress = styled('div', {});

const Directions = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const ProviderPhone = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Teletype = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const ResultCard = ({ data }) => {
  return (
    <ResultCardContainer>
      <Grid columns={3} justify="center">
        <Grid.Col span="33%">
          <Box color="transparent" padding="$md" align="start">
            <ProviderInfo alignItems="left" space={0}>
              <Heading offset={1}>{data?.providerName}</Heading>
              <ProviderSpecialty>{data?.providerSpecialty}</ProviderSpecialty>
              {data?.inNetwork && (
                <ProviderNetwork>In-Network Provider</ProviderNetwork>
              )}
              {data?.isAcceptingPatients && (
                <Badge
                  variant="success"
                  outline
                  icon={
                    <IconMaterial
                      icon="check_circle"
                      size="$sm"
                      color="$success1"
                      variant="filled"
                    />
                  }
                >
                  Accepting all patients
                </Badge>
              )}
              <ProviderGender>Gender: {data?.providerGender}</ProviderGender>
              <ProviderLanguage>
                Language(s): {data?.providerLanguage?.join(', ')}
              </ProviderLanguage>
            </ProviderInfo>
          </Box>
        </Grid.Col>
        <Grid.Col span="33%">
          <Box color="transparent" padding={0} align="start">
            <AddressInfo alignItems="left" space={0}>
              <ProviderAddress>{data?.providerAddress}</ProviderAddress>
              <ProviderLocation>{data?.providerLocation}</ProviderLocation>
              <Link href="https://www.google.com">
                View other locations & costs
              </Link>
              <br />
              <Directions>
                <IconMaterial icon="room" size="$md" variant="filled" />
                <Link href="https://www.google.com">Get directions</Link>
              </Directions>
              <ProviderPhone>
                <IconMaterial icon="phone" size="$md" variant="filled" />
                <Link href="https://www.google.com">{data?.providerPhone}</Link>
              </ProviderPhone>
              <Teletype>
                <IconMaterial
                  icon="accessibility"
                  size="$md"
                  variant="filled"
                />
                <Link href="https://www.google.com">TTY: 711</Link>
              </Teletype>
            </AddressInfo>
          </Box>
        </Grid.Col>
        <Grid.Col span="33%">
          <Box color="transparent" padding={0} align="start">
            <Selection>
              <Button
                variant="outline"
                after={<IconMaterial icon="arrow_forward" color="$primary1" />}
              >
                Select & assign provider
              </Button>
            </Selection>
          </Box>
        </Grid.Col>
      </Grid>
    </ResultCardContainer>
  );
};

// ResultCard.propTypes = {
//   data: PropTypes.shape({
//     providerName: PropTypes.string,
//     providerSpecialty: PropTypes.string,
//     providerGender: PropTypes.string,
//     providerPhone: PropTypes.string,
//     inNetwork: PropTypes.bool,
//     isAcceptingPatients: PropTypes.bool,
//     providerAddress: PropTypes.string,
//     providerLocation: PropTypes.string,
//     providerLanguage: PropTypes.arrayOf(PropTypes.string),
//   }),
// };

ResultCard.defaultProps = {
  data: null,
};
